export default function LogoText() {
  return (
    <div style={{ overflow: 'hidden', paddingTop: 0 }}>
      <main>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              fontSize: '8rem',
              color: '#fff',
              letterSpacing: '0',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            NExus Over
          </div>
          <div
            style={{
              textAlign: 'center',
              fontSize: '3rem',
              color: '#fff',
              letterSpacing: '0',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            vol.2
          </div>
        </div>
      </main>
    </div>
  );
}
