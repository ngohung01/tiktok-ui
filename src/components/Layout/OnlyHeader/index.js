import { Header } from "~/components/Layout/components";

function OnlyHeader({ children }) {
    return (
        <>
            <Header />
            <div className="content">{children}</div>
        </>
    );
}

export default OnlyHeader;
