import React from 'react'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import {
    FeaturesContainer,
    FeaturesCard,
    FeaturesWrapper,
    FeaturesIcon,
    FeaturesH1,
    FeaturesH2,
    FeaturesP
} from './FeatureElements'

const Features = () => {
    return (
        <FeaturesContainer id="features">
            <FeaturesH1>Features</FeaturesH1>
            <FeaturesWrapper>
                <FeaturesCard>
                    <FeaturesIcon src={Icon1}/>
                    <FeaturesH2>What medicines?</FeaturesH2>
                    <FeaturesP>All the kind of essential drugs which include antibiotics, painkillers, vitamins and medicines used in treatment of cardiovascular, respiratory, diabetes and gastroenterology diseases will be sold under this scheme.</FeaturesP>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesIcon src={Icon2}/>
                    <FeaturesH2>Myth about quality</FeaturesH2>
                    <FeaturesP>There is a myth among the public the quality of generic medicines is not as good as branded medicines. But this not true. Generic medicines work as effectively as branded medicines.</FeaturesP>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesIcon src={Icon3}/>
                    <FeaturesH2>How to get?</FeaturesH2>
                    <FeaturesP>Medicines purchased from various drug manufacturing companies and rebrand them and sold at very affordable rates. For this government will open stores in many cities across India.</FeaturesP>
                </FeaturesCard>
            </FeaturesWrapper>
        </FeaturesContainer>
    )
}

export default Features
