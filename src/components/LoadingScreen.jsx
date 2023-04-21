import { useProgress } from "@react-three/drei";

export const LoadingScreen = () => {
  const { progress } = useProgress();
  return (
    <div className={`loadingScreen`}>
  
      <div className="loadingScreen__progress">
        <div
          className="loadingScreen__progress__value"
          style={{
            width: `${progress}%`,
            
          }}
        />
      </div>
    </div>
  );
};
