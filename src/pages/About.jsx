export default function About() {
  return (
    <section className="page-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {/* Replace src with your photo path (e.g., /profile.jpg in public folder) */}
        <img
          src="/profile.jpg"
          alt="Profile"
          style={{ width: 220, height: 220, borderRadius: '50%', objectFit: 'cover', border: '4px solid #fff', background: '#222', boxShadow: '0 4px 32px #000a' }}
        />
        <div>
          <h2 style={{ marginBottom: '0.5rem' }}>About Me</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.7, margin: 0 }}>
            Hi, I’m <span style={{ color: '#fff', fontWeight: 700 }}>Suvarna Tekumalla</span> 👋, 
            a passionate developer and continuous learner who loves turning ideas into impactful digital solutions.<br /><br />
            My interests lie in <span style={{ color: '#fff', fontWeight: 600 }}>web development, problem-solving, and exploring modern technologies</span> 
            that make applications more efficient and user-friendly.<br /><br />
            I enjoy building projects that combine <span style={{ color: '#fff', fontWeight: 600 }}>creativity with functionality</span>.<br /><br />
            <span style={{ color: '#bbb' }}>
              This portfolio highlights my projects, certifications, and skills, and gives you a glimpse of my journey in tech.  
              I’m always open to learning, collaborating, and taking on new challenges—so let’s connect and build something great together! 🚀
            </span>
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', justifyContent: 'center' }}>
        <a href="https://www.linkedin.com/in/sarada-suvarna-tekumalla-107400254/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}>
          <span style={{ fontSize: '2rem', verticalAlign: 'middle' }}>🔗</span> LinkedIn
        </a>
        <a href="https://github.com/Suvarna1612" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}>
          <span style={{ fontSize: '2rem', verticalAlign: 'middle' }}>💻</span> GitHub
        </a>
        <a href="https://leetcode.com/u/suvarna_tekumalla/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}>
          <span style={{ fontSize: '2rem', verticalAlign: 'middle' }}>🧩</span> LeetCode
        </a>
      </div>
    </section>
  );
}
