import Card from './card';
import CardGrid from './cardGrid';

export default function CardsSection() {
  return (
    <CardGrid gridtitle="About The Company">
        <Card 
          title="Our Mission" 
          flaticon="fi fi-tr-population-globe" 
          content="Our mission is to increase access to behavioral health." 
        />
        <Card 
          title="Our Story" 
          flaticon="fi fi-tr-scroll-document-story" 
          content="Chi'va is named after a combination of ancient healing symbols and modern neuroscience. We intend to bridge the gap between mental well-being science and modern technology, helping our customers deliver scalable behavioral health care with no drop-offs positively impacting outcomes and operational costs." 
        />
        <Card 
          title="Compliance" 
          flaticon="fi fi-tr-diamond" 
          content="All Chi'Va™ intellectual property is protected, ensuring the brand's integrity and uniqueness in the digital health space. Further, Chi’Va is building a HIPAA Compliant platform for the safety and security of user data during interactions with Chi'Va. Learn More →" 
        />
    </CardGrid>
  );
}
