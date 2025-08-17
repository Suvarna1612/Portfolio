export default function Contact() {
  return (
    <section className="page-content" style={{ maxWidth: 500, margin: '0 auto' }}>
      <h2>Contact Me</h2>
      <div style={{ margin: '2rem 0', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <div><strong>Email:</strong> <a href="mailto:suvarnat1612@gmail.com" style={{ color: '#fff' }}>suvarnat1612@gmail.com</a></div>
        <div><strong>Phone:</strong> <a href="tel:+918985877351" style={{ color: '#fff' }}>+91-8985877351</a></div>
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
          <a href="https://github.com/SaradaSuvarnaTekumalla" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/sarada-suvarna-tekumalla/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem' }}>LinkedIn</a>
          <a href="https://leetcode.com/SaradaSuvarnaTekumalla/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem' }}>LeetCode</a>
          <a href="https://auth.geeksforgeeks.org/user/suvarnat1612/practice/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem' }}>GeeksForGeeks</a>
        </div>
      </div>
    </section>
  );
}
