import { useEffect, useRef } from 'react'
import './PitchViz.css'

const PitchViz = () => {
  const rootRef = useRef(null)

  useEffect(() => {
    if (!rootRef.current) return undefined

    const previousBodyMargin = document.body.style.margin
    document.body.style.margin = '0'
    document.body.classList.add('pitchviz-body')
    const rootEl = document.getElementById('root')
    if (rootEl) {
      rootEl.classList.add('pitchviz-root')
    }

    class FieldMasterApp {
      constructor(rootEl) {
        this.rootEl = rootEl
        this.selectedPitches = []
        this.anchorMode = 'center'
        this.scale = { pixelsPerMeter: 1, maxLength: 0, maxWidth: 0 }
        this.colors = [
          '#00ff9d', '#00d4ff', '#ff6b35', '#ffd23f', '#ee6c4d',
          '#9b59b6', '#e74c3c', '#f39c12', '#1abc9c', '#3498db'
        ]
        this.currentTheme = 'dark'
        this.handlers = []
        this.init()
      }

      init() {
        this.setupEventListeners()
        this.renderSuggestions()
        this.updateVisualization()
        this.applyTheme()
        window.fieldMaster = this
      }

      destroy() {
        this.handlers.forEach(({ target, type, handler }) => {
          target.removeEventListener(type, handler)
        })
        this.handlers = []
        if (window.fieldMaster === this) {
          delete window.fieldMaster
        }
      }

      addListener(target, type, handler) {
        target.addEventListener(type, handler)
        this.handlers.push({ target, type, handler })
      }

      setupEventListeners() {
        const themeToggle = this.rootEl.querySelector('#themeToggle')
        const pitchForm = this.rootEl.querySelector('#pitchForm')
        const anchorRadios = this.rootEl.querySelectorAll('input[name="anchor"]')

        if (themeToggle) {
          this.addListener(themeToggle, 'click', () => this.toggleTheme())
        }

        if (pitchForm) {
          this.addListener(pitchForm, 'submit', (e) => {
            e.preventDefault()
            this.addCustomPitch()
          })
        }

        anchorRadios.forEach((radio) => {
          this.addListener(radio, 'change', (e) => {
            this.anchorMode = e.target.value
            this.renderVisualization()
          })
        })

        this.addListener(window, 'resize', () => {
          if (this.selectedPitches.length > 0) {
            this.calculateScale()
            this.renderVisualization()
          }
        })
      }

      toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark'
        this.applyTheme()
      }

      applyTheme() {
        this.rootEl.setAttribute('data-theme', this.currentTheme)
      }

      addCustomPitch() {
        const name = this.rootEl.querySelector('#pitchName')?.value.trim()
        const length = parseFloat(this.rootEl.querySelector('#pitchLength')?.value)
        const width = parseFloat(this.rootEl.querySelector('#pitchWidth')?.value)

        if (!name || !length || !width) return

        if (this.selectedPitches.some((p) => p.name === name)) {
          alert('A pitch with this name already exists!')
          return
        }

        const newPitch = { name, length, width }
        this.selectedPitches.push(newPitch)
        this.rootEl.querySelector('#pitchForm')?.reset()
        this.updateSelectedPitches()
        this.calculateScale()
        this.updateVisualization()
      }

      renderSuggestions() {
        const grid = this.rootEl.querySelector('#suggestionsGrid')
        if (!grid) return
        grid.innerHTML = ''

        SUGGESTED_PITCHES.slice(0, 12).forEach((pitch) => {
          const button = document.createElement('button')
          button.className = 'suggestion-item'
          button.textContent = `${pitch.name}`
          button.dataset.pitchName = pitch.name

          const isAdded = this.selectedPitches.some((p) => p.name === pitch.name)
          if (isAdded) {
            button.classList.add('added')
          }

          button.addEventListener('click', () => this.addSuggestedPitch(pitch, button))
          grid.appendChild(button)
        })
      }

      addSuggestedPitch(pitch, button) {
        const existingIndex = this.selectedPitches.findIndex((p) => p.name === pitch.name)

        if (existingIndex !== -1) {
          this.removePitch(existingIndex)
          return
        }

        this.selectedPitches.push(pitch)

        if (button) {
          button.classList.add('added')
        }

        this.updateSelectedPitches()
        this.calculateScale()
        this.updateVisualization()
      }

      updateSelectedPitches() {
        const container = this.rootEl.querySelector('#selectedList')
        const countElement = this.rootEl.querySelector('#selectedCount')
        if (!container || !countElement) return

        container.innerHTML = ''
        countElement.textContent = this.selectedPitches.length

        this.selectedPitches.forEach((pitch, index) => {
          const item = document.createElement('div')
          item.className = 'selected-item'

          const color = this.colors[index % this.colors.length]
          const area = (pitch.length * pitch.width).toFixed(0)

          item.innerHTML = `
            <div class="selected-info">
              <div class="selected-name" style="color: ${color};">${pitch.name}</div>
              <div class="selected-dims">${pitch.length} x ${pitch.width}m • ${area} m²</div>
            </div>
            <button class="remove-btn" onclick="fieldMaster.removePitch(${index})">x</button>
          `

          container.appendChild(item)
        })
      }

      removePitch(index) {
        const removedPitch = this.selectedPitches[index]
        this.selectedPitches.splice(index, 1)

        if (removedPitch) {
          const suggestionButton = this.rootEl.querySelector(
            `.suggestion-item[data-pitch-name="${removedPitch.name}"]`
          )
          if (suggestionButton) {
            suggestionButton.classList.remove('added')
          }
        }

        this.updateSelectedPitches()
        this.calculateScale()
        this.updateVisualization()
      }

      calculateScale() {
        if (this.selectedPitches.length === 0) {
          this.scale = { pixelsPerMeter: 1, maxLength: 0, maxWidth: 0 }
          return
        }

        this.scale.maxLength = Math.max(...this.selectedPitches.map((p) => p.length))
        this.scale.maxWidth = Math.max(...this.selectedPitches.map((p) => p.width))

        const container = this.rootEl.querySelector('#pitchOverlayArea')
        if (!container) return

        const containerRect = container.getBoundingClientRect()
        const availableWidth = containerRect.width * 0.85
        const availableHeight = containerRect.height * 0.85

        const scaleX = availableWidth / this.scale.maxLength
        const scaleY = availableHeight / this.scale.maxWidth

        this.scale.pixelsPerMeter = Math.min(scaleX, scaleY)
        this.updateScaleInfo()
      }

      updateScaleInfo() {
        const scaleInfo = this.rootEl.querySelector('#scaleInfo')
        if (!scaleInfo) return

        if (this.selectedPitches.length > 0) {
          scaleInfo.textContent = `Scale: ${this.scale.pixelsPerMeter.toFixed(2)} px/m`
        } else {
          scaleInfo.textContent = ''
        }
      }

      updateVisualization() {
        const vizTitle = this.rootEl.querySelector('#vizTitle')
        const emptyState = this.rootEl.querySelector('#emptyState')

        if (!vizTitle || !emptyState) return

        if (this.selectedPitches.length === 0) {
          vizTitle.textContent = 'Add pitches to begin'
          emptyState.style.display = 'block'
          this.clearVisualization()
          return
        }

        emptyState.style.display = 'none'
        vizTitle.textContent = `Analyzing ${this.selectedPitches.length} Football Pitches`
        this.renderVisualization()
        this.renderLegend()
      }

      clearVisualization() {
        const overlay = this.rootEl.querySelector('#pitchOverlayArea')
        const legend = this.rootEl.querySelector('#legendContent')
        if (!overlay || !legend) return

        overlay.innerHTML = '<div class="empty-state" id="emptyState"><div class="empty-icon">⚽</div><h3>Ready?</h3><p>Add your first pitch to begin comparison</p></div>'
        legend.innerHTML = ''
      }

      renderVisualization() {
        const overlayArea = this.rootEl.querySelector('#pitchOverlayArea')
        if (!overlayArea) return

        const existingPitches = overlayArea.querySelectorAll('.pitch-rectangle')
        existingPitches.forEach((pitch) => pitch.remove())

        if (this.selectedPitches.length === 0) return

        const containerRect = overlayArea.getBoundingClientRect()
        const centerX = containerRect.width / 2
        const centerY = containerRect.height / 2

        this.selectedPitches.forEach((pitch, index) => {
          const color = this.colors[index % this.colors.length]
          const pitchEl = this.createPitchElement(pitch, index, color)
          overlayArea.appendChild(pitchEl)
        })

        setTimeout(() => {
          this.calculateScale()
          this.updatePitchPositions(centerX, centerY)
        }, 50)
      }

      createPitchElement(pitch, index, color) {
        const pitchEl = document.createElement('div')
        pitchEl.className = 'pitch-rectangle overlay-pitch pitch-animated'
        pitchEl.dataset.pitchIndex = index
        pitchEl.style.borderColor = color

        setTimeout(() => {
          pitchEl.classList.remove('pitch-animated')
        }, 500)

        this.addHoverEffects(pitchEl, pitch, index)
        return pitchEl
      }

      updatePitchPositions(centerX, centerY) {
        const pitchElements = this.rootEl.querySelectorAll('.overlay-pitch')
        pitchElements.forEach((pitchEl, index) => {
          const pitch = this.selectedPitches[index]
          if (!pitch) return

          const width = pitch.length * this.scale.pixelsPerMeter
          const height = pitch.width * this.scale.pixelsPerMeter

          let left
          let top

          if (this.anchorMode === 'center') {
            left = centerX - width / 2
            top = centerY - height / 2
          } else {
            left = centerX - (this.scale.maxLength * this.scale.pixelsPerMeter) / 2
            top = centerY + (this.scale.maxWidth * this.scale.pixelsPerMeter) / 2 - height
          }

          pitchEl.style.width = `${width}px`
          pitchEl.style.height = `${height}px`
          pitchEl.style.left = `${left}px`
          pitchEl.style.top = `${top}px`

          if (this.selectedPitches.length > 1) {
            pitchEl.style.background = `${this.colors[index % this.colors.length]}15`
          }
        })
      }

      renderLegend() {
        const legend = this.rootEl.querySelector('#legendContent')
        if (!legend) return
        legend.innerHTML = ''

        this.selectedPitches.forEach((pitch, index) => {
          const color = this.colors[index % this.colors.length]
          const legendItem = this.createLegendItem(pitch, color, index)
          legend.appendChild(legendItem)
        })
      }

      createLegendItem(pitch, color, index) {
        const item = document.createElement('div')
        item.className = 'legend-item'
        item.dataset.pitchIndex = index

        const area = (pitch.length * pitch.width).toFixed(0)

        item.innerHTML = `
          <div class="legend-color" style="border-color: ${color}; background: ${color}20;"></div>
          <div class="legend-info">
            <div class="legend-name">${pitch.name}</div>
            <div class="legend-dims">${pitch.length} × ${pitch.width}m • ${area} m²</div>
          </div>
        `

        item.addEventListener('mouseenter', () => this.highlightPitch(index))
        item.addEventListener('mouseleave', () => this.removeHighlight(index))

        return item
      }

      highlightPitch(index) {
        const legendItem = this.rootEl.querySelector(`.legend-item[data-pitch-index="${index}"]`)
        if (legendItem) {
          legendItem.classList.add('highlighted')
        }

        const pitchEl = this.rootEl.querySelector(`.overlay-pitch[data-pitch-index="${index}"]`)
        if (pitchEl) {
          pitchEl.classList.add('highlighted')
        }
      }

      removeHighlight(index) {
        const legendItem = this.rootEl.querySelector(`.legend-item[data-pitch-index="${index}"]`)
        if (legendItem) {
          legendItem.classList.remove('highlighted')
        }

        const pitchEl = this.rootEl.querySelector(`.overlay-pitch[data-pitch-index="${index}"]`)
        if (pitchEl) {
          pitchEl.classList.remove('highlighted')
        }
      }

      addHoverEffects(element, pitch, index) {
        const color = this.colors[index % this.colors.length]

        element.addEventListener('mouseenter', (e) => {
          element.classList.add('pitch-hover')
          element.style.boxShadow = `0 0 30px ${color}60`
          this.highlightPitch(index)
          this.showTooltip(e, pitch, color)
        })

        element.addEventListener('mousemove', (e) => {
          this.updateTooltipPosition(e)
        })

        element.addEventListener('mouseleave', () => {
          element.classList.remove('pitch-hover')
          element.style.boxShadow = ''
          this.removeHighlight(index)
          this.hideTooltip()
        })
      }

      showTooltip(event, pitch, color) {
        const tooltip = this.rootEl.querySelector('#tooltip')
        if (!tooltip) return

        const area = (pitch.length * pitch.width).toFixed(0)

        tooltip.querySelector('.tooltip-title').textContent = pitch.name
        tooltip.querySelector('.tooltip-title').style.color = color
        tooltip.querySelector('.tooltip-dimensions').textContent = `${pitch.length} × ${pitch.width} meters`
        tooltip.querySelector('.tooltip-area').textContent = `Area: ${area} m²`

        tooltip.classList.add('visible')
        this.updateTooltipPosition(event)
      }

      updateTooltipPosition(event) {
        const tooltip = this.rootEl.querySelector('#tooltip')
        if (!tooltip) return

        const rect = tooltip.getBoundingClientRect()
        let x = event.clientX + 15
        let y = event.clientY - 15

        if (x + rect.width > window.innerWidth) {
          x = event.clientX - rect.width - 15
        }
        if (y < 0) {
          y = event.clientY + 15
        }

        tooltip.style.left = `${x}px`
        tooltip.style.top = `${y}px`
      }

      hideTooltip() {
        const tooltip = this.rootEl.querySelector('#tooltip')
        if (!tooltip) return
        tooltip.classList.remove('visible')
      }
    }

    const SUGGESTED_PITCHES = [
      { name: 'FIFA World Cup Standard', length: 105, width: 68 },
      { name: 'Wembley Stadium', length: 105, width: 68 },
      { name: 'Camp Nou', length: 105, width: 68 },
      { name: 'Old Trafford', length: 105, width: 68 },
      { name: 'Anfield', length: 101, width: 68 },
      { name: 'Emirates Stadium', length: 105, width: 68 },
      { name: 'Stamford Bridge', length: 103, width: 67 },
      { name: 'Tottenham Hotspur Stadium', length: 105, width: 68 },
      { name: 'Etihad Stadium', length: 105, width: 68 },
      { name: 'Allianz Arena', length: 105, width: 68 },
      { name: 'Santiago Bernabeu', length: 105, width: 68 },
      { name: 'San Siro', length: 105, width: 68 },
      { name: 'Juventus Stadium', length: 105, width: 68 },
      { name: 'Parc des Princes', length: 105, width: 68 },
      { name: 'Borussia-Park', length: 105, width: 68 },
      { name: 'Goodison Park', length: 100.48, width: 68 },
      { name: 'Craven Cottage', length: 100, width: 65 },
      { name: 'Bramall Lane', length: 102, width: 66 },
      { name: 'Villa Park', length: 105, width: 68 },
      { name: "St. James' Park", length: 105, width: 68 }
    ]

    const app = new FieldMasterApp(rootRef.current)

    return () => {
      app.destroy()
      document.body.style.margin = previousBodyMargin
      document.body.classList.remove('pitchviz-body')
      if (rootEl) {
        rootEl.classList.remove('pitchviz-root')
      }
    }
  }, [])

  return (
    <div className="pitchviz-page" ref={rootRef} data-theme="dark">
      <div className="app-container">
        <header className="app-header">
          <div className="logo-section">
            <div className="logo-icon">⚽</div>
            <h1 className="app-title">PitchViz</h1>
            <span className="subtitle">
              If you ever wondered what the difference in size between football pitches actually looks like, you are in the right place!
            </span>
          </div>
          <div className="controls-section">
            <div class="theme-toggle">
                <button class="theme-btn" id="themeToggle">
                    <span class="icon dark-icon">🌙</span>
                    <span class="icon light-icon">☀️</span>
                    <span class="theme-text"></span>
                </button>
            </div>
            <a
              className="github-btn"
              href="https://github.com/hirbod03/pitchViz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View PitchViz on GitHub"
            >
              <svg className="github-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.018 10.018 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </header>

        <section className="input-panel">
          <div className="input-section">
            <h2 className="panel-title">Add Pitch for Comparison</h2>
            <form className="pitch-form" id="pitchForm">
              <div className="input-group">
                <input type="text" id="pitchName" placeholder="Pitch name (e.g., Wembley Stadium)" required />
                <input type="number" id="pitchLength" placeholder="Length (m)" min="90" max="120" step="0.1" required />
                <input type="number" id="pitchWidth" placeholder="Width (m)" min="45" max="90" step="0.1" required />
                <button type="submit" className="add-btn">
                  <span className="icon">+</span>
                  Add Pitch
                </button>
              </div>
            </form>
            <div className="suggestions-section">
              <h3 className="suggestions-title">Quick Add Famous Pitches</h3>
              <div className="suggestions-grid" id="suggestionsGrid"></div>
            </div>
          </div>
          <div className="selected-pitches">
            <h3 className="selected-title">Selected Pitches (<span id="selectedCount">0</span>)</h3>
            <div className="selected-list" id="selectedList"></div>
          </div>
        </section>

        <main className="viz-container">
          <div className="viz-header">
            <h2 className="viz-title" id="vizTitle">Add pitches to begin</h2>
            <div className="viz-controls">
              <div className="scale-info" id="scaleInfo"></div>
              <div className="anchor-toggle" id="anchorToggle">
                <label className="anchor-label">
                  <input type="radio" name="anchor" value="center" defaultChecked />
                  <span className="radio-custom"></span>
                  Center Anchor
                </label>
                <label className="anchor-label">
                  <input type="radio" name="anchor" value="corner" />
                  <span className="radio-custom"></span>
                  Corner Anchor
                </label>
              </div>
            </div>
          </div>

          <div className="main-view">
            <div className="comparison-container">
              <div className="pitch-overlay-area" id="pitchOverlayArea">
                <div className="empty-state" id="emptyState">
                  <div className="empty-icon">⚽</div>
                  <h3>Ready?</h3>
                  <p>Add your first pitch to begin comparison</p>
                </div>
              </div>
              <div className="legend-panel" id="legendPanel">
                <div className="legend-header">
                  <h3 className="legend-title">Pitches Shown</h3>
                </div>
                <div className="legend-content" id="legendContent"></div>
              </div>
            </div>
          </div>
        </main>

        <div className="tooltip" id="tooltip">
          <div className="tooltip-content">
            <div className="tooltip-title"></div>
            <div className="tooltip-dimensions"></div>
            <div className="tooltip-area"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PitchViz
