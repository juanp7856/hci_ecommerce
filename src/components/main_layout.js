import Head from "next/head"
import Header from "./header.js"
import Footer from "./footer.js"

const MainLayout = ({title, content, children}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content}/>
            </Head>
            <Header />
                {children}
            <Footer />
        </>
        

    )
}

export default MainLayout