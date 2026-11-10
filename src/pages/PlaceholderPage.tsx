
interface PlaceholderPageProps {
    title: string;
}

function PlaceholderPage({ title }: PlaceholderPageProps) {
    return (
        <main className="page-placeholder">
            <p className="page-eyebrow">ACADEMIC PORTFOLIO</p>
            <h1>{title}</h1>
            <p>此頁面目前正在開發中。</p>
        </main>
    );
}

export default PlaceholderPage;
