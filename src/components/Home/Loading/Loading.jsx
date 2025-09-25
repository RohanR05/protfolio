import { Player } from "@lottiefiles/react-lottie-player";
import sandyLoading from "../../../assets/Sandy Loading.json";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <Player
        autoplay
        loop
        speed={1.5} // adjust speed
        src={sandyLoading}
        style={{ width: 250, height: 250 }}
      />
    </div>
  );
};

export default Loading;
