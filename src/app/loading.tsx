export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-secondary h-12 w-12"></div>
    </div>
  );
}
