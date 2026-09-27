const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background animate-fade-in">
      <div className="text-center animate-slide-up">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-accent underline hover:text-foreground">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
