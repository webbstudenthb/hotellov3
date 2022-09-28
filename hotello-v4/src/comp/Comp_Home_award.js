import "../styles/award.css";

function Award() {
  return (
    <>
      <div style={{}}>
        <div>
          <h2>Våra utmärkelser</h2>
          <p style={{ width: "70%", paddingBottom: "16px" }}>
            Vi är stolta över att fått mottagit flera pris genom åren. Det pris
            vi är mest stolta över är folkets favoritresebyrå som vi vann 2020.
          </p>

          <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "109.66px"}}>
            <div
              className="border"
              style={{
                height: "300px",
                width: "300px",
                display: "flex",
                justifyContent: "center",
                borderRadius: "100%",
              }}
            >
                <img style={{width: "80%"}} src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/Crown.svg?v=1664270395106" alt="ikon av en krona" />

            </div>
            <div
              className="border"
              style={{
                height: "300px",
                width: "300px",
                display: "flex",
                justifyContent: "center",
                borderRadius: "100%",
              }}
            ><img style={{width: "80%"}} src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/Crown.svg?v=1664270395106" alt="ikon av en krona" /></div>
            <div
              className="border"
              style={{
                height: "300px",
                width: "300px",
                display: "flex",
                justifyContent: "center",
                borderRadius: "100%",
              }}
            ><img style={{width: "80%"}} src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/Crown.svg?v=1664270395106" alt="ikon av en krona" /></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Award;
