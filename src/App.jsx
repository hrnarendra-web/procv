export default function App() {
  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>ProCV</h1>
      <p>Premium CV Templates & Smart CV Editor</p>

      <h2>Pricing</h2>
      <ul>
        <li>Single CV – $5</li>
        <li>Professional Pack – $20</li>
        <li>Day Pass – $30</li>
      </ul>

      <div style={{ marginTop: 20 }}>
  <a href="PASTE_SINGLE_CV_LINK_HERE" target="_blank">
    <button style={{ marginRight: 10, padding: '10px 20px', background: 'green', color: 'white' }}>Single CV - $5</button>
  </a>
  <a href="PASTE_PRO_PACK_LINK_HERE" target="_blank">
    <button style={{ marginRight: 10, padding: '10px 20px', background: 'blue', color: 'white' }}>Pro Pack - $20</button>
  </a>
  <a href="PASTE_DAY_PASS_LINK_HERE" target="_blank">
    <button style={{ padding: '10px 20px', background: 'purple', color: 'white' }}>Day Pass - $30</button>
  </a>
</div>

    </div>
  );
}
