// src/components/panels/ContactPanel.jsx
export default function ContactPanel() {
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    // Optional: Show a temporary notification
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = `${type} copied!`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
  };

  return (
    <div className="tab-panel">
      <div className="contact-wrap">
        <div className="contact-label">WHAT'S NEXT?</div>
        <div className="contact-title">Get In Touch</div>
        <p className="contact-body">
          For any new opportunities, my inbox is always open. Whether you have a question 
          or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="contact-methods">
          <div className="contact-method" onClick={() => handleCopy('a.anaclet920@gmail.com', 'Email')}>
            <div className="contact-method-icon">
              <i className="ti ti-mail" />
            </div>
            <div className="contact-method-details">
              <span className="contact-method-label">Email</span>
              <span className="contact-method-value">a.anaclet920@gmail.com</span>
            </div>
            <button className="copy-btn" title="Copy email">
              <i className="ti ti-copy" />
            </button>
          </div>
          
          <div className="contact-method" onClick={() => handleCopy('+250 788 123 456', 'Phone')}>
            <div className="contact-method-icon">
              <i className="ti ti-phone" />
            </div>
            <div className="contact-method-details">
              <span className="contact-method-label">Phone</span>
              <span className="contact-method-value">+250 784 354 460</span>
            </div>
            <button className="copy-btn" title="Copy phone number">
              <i className="ti ti-copy" />
            </button>
          </div>
        </div>

        <div className="contact-social-links">
          <a href="https://github.com/anaclet922" target="_blank" rel="noreferrer" className="contact-social-link">
            <i className="ti ti-brand-github" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/anaclet-ahishakiye-b3b18618b/" target="_blank" rel="noreferrer" className="contact-social-link">
            <i className="ti ti-brand-linkedin" />
            <span>LinkedIn</span>
          </a>
          <a href="https://twitter.com/AnacletAhisha" target="_blank" rel="noreferrer" className="contact-social-link">
            <i className="ti ti-brand-twitter" />
            <span>Twitter</span>
          </a>
        </div>

        <a className="contact-cta" href="mailto:a.anaclet920@gmail.com">
          Say Hello <i className="ti ti-mail" />
        </a>
      </div>
    </div>
  );
}