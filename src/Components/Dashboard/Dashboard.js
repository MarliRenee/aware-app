import React from 'react';
import ArchiveIceberg from '../ArchiveIceberg/ArchiveIceberg.js'

function Dashboard() {
  return (
      <main className='Dashboard'>
        <body>
        <header>
          <h1>Welcome</h1>
          <div className="linkButton">
            <a href="iceberg">New Iceberg</a>
          </div>
        </header>

        <section className="Archive">
          <h2>Past Journeys</h2>
          <ArchiveIceberg />
          <ArchiveIceberg />
          <ArchiveIceberg />
          <ArchiveIceberg />
        </section>
        

      </body>
    </main>
  );
}

export default Dashboard;