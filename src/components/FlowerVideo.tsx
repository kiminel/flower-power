const FlowerVideo = () => {
  return (
    <video
      className="h-100vh w-full object-cover animate-clip-from-top-animation shadow-2xl"
      autoPlay
      muted
      loop
    >
      <source src="/video/flower-power.mp4" type="video/mp4" />
    </video>
  );
};

export default FlowerVideo;
