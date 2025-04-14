import Content from '../../components/Content';

const About = () => {
    return (
        <Content>
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-gradient-to-br from-[#E88183] to-[#676767] bg-opacity-90 p-12 rounded-xl shadow-xl w-full max-w-3xl text-white">
                <h1 className="text-4xl font-bold text-left mb-4">We are the Plan-it-Pros</h1>
                <p className="text-lg text-left">
                — This is an app designed by Caspar Primke, Luke Mason, Nancy Lin, and Jonathan Reizis for a group project in a Web programing class. We wanted to create something that made and managed events.
                The app was made on VScode with next.js, react, and other elements.
                </p>
            </div>
        </div>
    </Content>
    )
};
export default About;