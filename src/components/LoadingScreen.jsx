import { useProgress, Html } from "@react-three/drei";

export const LoadingScreen = () => {
  const { progress } = useProgress();
  return (
    <div className={`loadingScreen`}>
      <div class="spin-container">
        <div class="spin" id="loader"></div>
        <span id="text">{Math.round(progress)} % loaded</span>
      </div>
    </div>
  );
};
