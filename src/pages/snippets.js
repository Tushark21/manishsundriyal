import React from 'react'

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Button } from "react-bootstrap";
import SnippetsListing from '../components/snippetsListing';
import HeroImage from '../components/hero-image';

const Snippets = () => {
    return (
        <div>
            <Layout>
                <SEO title="Snippets" />
                <HeroImage>
                    <h1>We've got some real cool snippets</h1>
                    <p>
                        We've got tutorials and resources geared towards self-taught web developers.
                    </p>
                    <p>
                        <Button variant="light">Check it out below!</Button>
                    </p>
                </HeroImage>
                <Container>
                    <SnippetsListing />
                </Container>
            </Layout>
        </div>
    )
}

export default Snippets;
