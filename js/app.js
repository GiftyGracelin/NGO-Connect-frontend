const DB = {
  pendingNGOs: JSON.parse(localStorage.getItem('pendingNGOs') || '[]'),
  approvedNGOs: JSON.parse(localStorage.getItem('approvedNGOs') || '[]'),
  campaigns: JSON.parse(localStorage.getItem('campaigns') || '[]'),
  donations: JSON.parse(localStorage.getItem('donations') || '[]'),
  eventApps: JSON.parse(localStorage.getItem('eventApps') || '[]'),
};

function saveDB() {
  localStorage.setItem('pendingNGOs', JSON.stringify(DB.pendingNGOs));
  localStorage.setItem('approvedNGOs', JSON.stringify(DB.approvedNGOs));
  localStorage.setItem('campaigns', JSON.stringify(DB.campaigns));
  localStorage.setItem('donations', JSON.stringify(DB.donations));
  localStorage.setItem('eventApps', JSON.stringify(DB.eventApps));
}
