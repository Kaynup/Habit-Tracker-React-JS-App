function BuildInfo() {
    return (
        <div style={{ padding: "10px", background: "#f0f8ff", borderRadius: "5px", border: "1px solid #b0d4ff" }}>
            <p><strong>Deployment Ready</strong></p>
            <p>Run <code>npm run build</code> to compile the app into static assets in the <code>dist/</code> folder.</p>
            <p>You can host these files on Vercel, Netlify, or serve them via Flask!</p>
        </div>
    );
}

export { BuildInfo };
