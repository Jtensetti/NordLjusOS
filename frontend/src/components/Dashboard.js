// Dashboard.js (i frontend/src/components)

import React from 'react';

function Dashboard({ userRole }) {
  return (
    <div>
      <h1>{userRole} Dashboard</h1>
      {/* Här kan vi lägga till specifika komponenter beroende på rollen */}
    </div>
  );
}

export default Dashboard;
