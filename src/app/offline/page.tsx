export default function OfflinePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="text-2xl font-semibold text-foreground mb-2">
          You&apos;re offline
        </h1>
        <p className="text-muted-foreground">
          Please check your internet connection and try again.
        </p>
      </div>
    </div>
  );
}
