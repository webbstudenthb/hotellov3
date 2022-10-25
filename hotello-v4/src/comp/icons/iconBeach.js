//importerar css fil
import "../../styles/icons.css";

//nedan hämtas ikonen från glitch där vi valt att "hosta" våra bilder. Positionering och styling görs dels i inline styling och i css filen
function IconBeach() {
  return (
    <div className="iconBoxInline">
      <div className="iconBox">
        <img
          style={{ width: "18px", height: "18px", color: "white" }}
          src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/umbrella-beach-solid%20(1).svg?v=1664457891842"
          alt="Ikon med ett parasoll"
        />
      </div>
    </div>
  );
}

export default IconBeach;
