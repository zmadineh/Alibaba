import Document , {Html , Main , NextScript , Head} from 'next/document'

class MyDocument extends Document {
    render() {
        return(
            <Html lang='fa' dir='rtl'>
                <Head>
                    <link 
                        rel='preload'
                        href='/Assets/Fonts/Alibaba-Regular.ttf'
                        as='font'
                        crossOrigin='anonymous'
                        
                    ></link>
                    <link 
                        rel='preload'
                        href='/Assets/Fonts/Alibaba-Bold.ttf'
                        as='font'
                        crossOrigin='anonymous'
                    ></link>
                    <link 
                        rel='preload'
                        href='/Assets/Fonts/Alibaba-Light.ttf'
                        as='font'
                        crossOrigin='anonymous'
                    ></link>
                    <link 
                        rel='preload'
                        href='/Assets/Fonts/Alibaba-Black.ttf'
                        as='font'
                        crossOrigin='anonymous'
                    ></link>
                </Head>
                <body>
                    <Main></Main>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
