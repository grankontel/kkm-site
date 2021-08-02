import React from 'react'
import { Columns, Container, Content, Heading } from 'react-bulma-components'
import Navigation from '../components/navigation'
import Page from '../layouts/page'

const IndexPage = () => {
    return (
        <Page>
            <Navigation />
            <Container renderAs="main" role="main" pt={6}>
                <Columns>
                <Columns.Column size="three-fifths">

                </Columns.Column>
                <Columns.Column size="two-fifths">
                    <Heading>Korijé Kréyòl Maké</Heading>
                    <Content>
                        Tout zouti ou bizwen pou korijé kréyòl maké
                    </Content>
                </Columns.Column>
                </Columns>
            
            </Container>
            
        </Page>
    )
}

export default IndexPage
