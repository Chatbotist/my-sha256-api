export default function Home() {
  return (
    <div>
      <h1>Welcome to the SHA-256 API</h1>
      <p>This API allows you to encode and decode text using the SHA-256 algorithm.</p>
      <h2>Endpoints:</h2>
      <ul>
        <li><code>/api/encode</code> - Encode text to SHA-256 hash</li>
        <li><code>/api/decode</code> - Decode SHA-256 hash to text</li>
      </ul>
    </div>
  );
}
