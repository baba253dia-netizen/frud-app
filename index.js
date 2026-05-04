import React, { useState } from 'react';

const InscriptionFRUD = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [formData, setFormData] = useState({
    nom: '',
    nni: '',
    wilaya: '',
    moughataa: ''
  });

  const wilayas = [
    "Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimagha", 
    "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott Nord", 
    "Nouakchott Ouest", "Nouakchott Sud", "Tagant", "Tiris Zemmour", "Trarza"
  ];

  const isNniValid = /^[0-9]{10}$/.test(formData.nni);
  const isFormReady = formData.nom && isNniValid && formData.wilaya && formData.moughataa;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage({ type: 'success', text: 'Vérification réussie ! Prêt pour le paiement.' });
    }, 1000);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px', margin: 'auto' }}>
      <div style={{ borderTop: '8px solid #2B4C9B', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
        <h2 style={{ textAlign: 'center' }}>ADHÉSION FRUD</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold' }}>NOM & PRÉNOM</label>
            <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }} onChange={(e) => setFormData({...formData, nom: e.target.value})} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold' }}>NNI (10 CHIFFRES)</label>
            <input type="text" maxLength="10" style={{ width: '100%', padding: '10px', border: isNniValid ? '1px solid #ccc' : '1px solid red' }} onChange={(e) => setFormData({...formData, nni: e.target.value.replace(/\D/g, '')})} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold' }}>WILAYA</label>
            <select style={{ width: '100%', padding: '10px' }} onChange={(e) => setFormData({...formData, wilaya: e.target.value})}>
              <option value="">Choisir...</option>
              {wilayas.map(w => <option key={w} value={w}>{w}</option>)}
            </select>
          </div>
          <button disabled={!isFormReady} style={{ width: '100%', padding: '15px', backgroundColor: isFormReady ? '#2B4C9B' : '#ccc', color: 'white', border: 'none', fontWeight: 'bold' }}>
            CONTINUER
          </button>
        </form>
        {message.text && <p style={{ color: 'green', textAlign: 'center' }}>{message.text}</p>}
      </div>
    </div>
  );
};

export default InscriptionFRUD;
  
