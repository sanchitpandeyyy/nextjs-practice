export default function ProductDetailsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        {children}
        <h1 className="text-2xl">Features Product</h1>
        </>
    )}