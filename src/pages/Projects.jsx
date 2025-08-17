export default function Projects() {
  return (
    <section className="page-content">
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>Interview Prep App</strong> – Created a MERN app to generate interview questions using the Gemini API.<br />
          Implemented JWT-based authentication with bcrypt for secure access.<br />
          Enabled topic-based, AI-driven question generation for users.
        </li>
        <li>
          <strong>Personal Journal</strong> – Built a personal journal using Node.js, Express.js, Multer, MongoDB, and EJS for creating and managing journal entries.<br />
          Included functionalities like image uploads and marking entries as favourites.
        </li>
        <li>
          <strong>Mini Arcade</strong> – Built a multi-game web platform combining Tenzies, 2048, Memory Matcher, and Wordle using HTML, CSS, JavaScript, and React.<br />
          Deployed the responsive website on Vercel, allowing seamless navigation between games with a user-friendly interface.
        </li>
      </ul>
    </section>
  );
}
