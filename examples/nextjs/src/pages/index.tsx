import Head from 'next/head';
import styles from '@/styles/Home.module.css';
//TODO:Once the changes are live on npm in the revert package we can import the package directly and remove the lib folder
import { RevertConnect } from '@/lib';

export default function Home() {
    return (
        <>
            <Head>
                <title>Revert Demo App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <RevertConnect
                    config={{
                        revertToken: 'pk_test_Y2xlcmsuc3Ryb25nLmRlZXItNTYubGNsLmRldiQ',
                        tenantId: 'testTenantId',
                    }}
                />
            </main>
        </>
    );
}
