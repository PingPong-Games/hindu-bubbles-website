import './app.css'

export function App() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="logo-container">
            <div className="om-symbol">ॐ</div>
          </div>
          <h1 className="title">Hindu Bubbles</h1>
          <p className="tagline">Embark on a Divine Journey Through Hindu Mythology</p>
          <p className="subtitle">Clear bubbles, help deities overcome challenges, and gather divine knowledge</p>
          
          <div className="download-buttons">
            <a href="#" className="btn btn-appstore">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div>
                <span className="btn-text-small">Download on the</span>
                <span className="btn-text-large">App Store</span>
              </div>
            </a>
            <a href="#" className="btn btn-playstore">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div>
                <span className="btn-text-small">Get it on</span>
                <span className="btn-text-large">Google Play</span>
              </div>
            </a>
          </div>
        </div>
        
        <div className="floating-bubbles">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Divine Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎮</div>
            <h3>Spiritual Journey</h3>
            <p>Help various Hindu deities overcome challenges and restore sacred realms</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Divine Knowledge</h3>
            <p>Learn about Hindu mythology through educational pop-ups as you progress</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌟</div>
            <h3>Multiple Worlds</h3>
            <p>Explore different realms, each focusing on a central deity or mythological theme</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Challenging Levels</h3>
            <p>Master hundreds of bubble-popping puzzles with increasing difficulty</p>
          </div>
        </div>
      </section>

      {/* Power-ups Section */}
      <section className="powerups">
        <h2 className="section-title">Divine Power-Ups</h2>
        <div className="powerups-grid">
          <div className="powerup-card">
            <div className="powerup-icon chakra">⚡</div>
            <h3>Chakra Burst</h3>
            <p>Unleash a powerful energy surge that clears a large area of bubbles</p>
          </div>
          <div className="powerup-card">
            <div className="powerup-icon trident">🔱</div>
            <h3>Trident Strike</h3>
            <p>A focused, piercing attack that clears a vertical or horizontal line</p>
          </div>
          <div className="powerup-card">
            <div className="powerup-icon celestial">🌀</div>
            <h3>Celestial Swirl</h3>
            <p>Mystical Kundalini energy that rearranges or targets specific colors</p>
          </div>
        </div>
      </section>

      {/* Dashavatara Lives System */}
      <section className="lives-system">
        <h2 className="section-title">Dashavatara Lives System</h2>
        <p className="section-subtitle">Experience the 10 Avatars of Vishnu as your divine energy</p>
        <div className="avatars-grid">
          <div className="avatar-card">
            <div className="avatar-number">1</div>
            <h4>Matsya</h4>
            <p>The Fish</p>
          </div>
          <div className="avatar-card">
            <div className="avatar-number">2</div>
            <h4>Kurma</h4>
            <p>The Tortoise</p>
          </div>
          <div className="avatar-card">
            <div className="avatar-number">3</div>
            <h4>Varaha</h4>
            <p>The Boar</p>
          </div>
          <div className="avatar-card">
            <div className="avatar-number">4</div>
            <h4>Narasimha</h4>
            <p>The Man-Lion</p>
          </div>
          <div className="avatar-card">
            <div className="avatar-number">5</div>
            <h4>Vamana</h4>
            <p>The Dwarf</p>
          </div>
          <div className="avatar-card">
            <div className="avatar-number">6</div>
            <h4>Parashurama</h4>
            <p>The Warrior</p>
          </div>
          <div className="avatar-card">
            <div className="avatar-number">7</div>
            <h4>Rama</h4>
            <p>The Prince</p>
          </div>
          <div className="avatar-card">
            <div className="avatar-number">8</div>
            <h4>Krishna</h4>
            <p>The Divine</p>
          </div>
          <div className="avatar-card">
            <div className="avatar-number">9</div>
            <h4>Buddha</h4>
            <p>The Enlightened</p>
          </div>
          <div className="avatar-card highlight">
            <div className="avatar-number">10</div>
            <h4>Kalki</h4>
            <p>The Ultimate</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Begin Your Spiritual Journey Today</h2>
        <p>Download Hindu Bubbles and experience divine puzzle gameplay</p>
        <div className="download-buttons">
          <a href="#" className="btn btn-appstore">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <div>
              <span className="btn-text-small">Download on the</span>
              <span className="btn-text-large">App Store</span>
            </div>
          </a>
          <a href="#" className="btn btn-playstore">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div>
              <span className="btn-text-small">Get it on</span>
              <span className="btn-text-large">Google Play</span>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Hindu Bubbles. All rights reserved.</p>
        <p className="footer-tagline">Experience the divine in every bubble 🕉️</p>
      </footer>
    </div>
  )
}
