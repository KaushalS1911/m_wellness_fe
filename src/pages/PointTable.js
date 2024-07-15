import React, {useState} from 'react';
import {Box, Container} from '@mui/material';
import {Gauge, gaugeClasses} from '@mui/x-charts';
import {useParams} from "react-router-dom"

function PointTable(props) {
    const [points, setPoints] = useState(75);
    const language = sessionStorage.getItem("language")
    const {id} = useParams()
    const settings = {
        width: 350,
        height: 200,
        // value: 60,
    };

    const per = ((id * 100) / 60).toFixed(0)

    const descEng = (data) => {
        switch (true) {
            case data >= 50 && data <= 60 :
                return {
                    desc: "You have demonstrated excellent stress management, emotional resilience, and decision - making skills, which are crucial for your exam preparation.Your ability to stay calm under pressure and maintain a positive mindset is commendable, and these traits will serve you well not only in your exams but also in your future career.Keep up the good work, continue refining your skills, and remember that consistent effort and self - belief are key to achieving your goals.With your determination and resilience, you are well-equipped to overcome any challenges that come your way.",
                    color: "#325343"
                }
            case data >= 40 && data <= 49 :
                return {
                    desc: "You have demonstrated good skills and behaviors, but there are some areas that could benefit from improvement.Focus on enhancing your stress management techniques and decision-making strategies to be fully prepared for the challenges ahead.Developing a robust set of stress management skills will help you stay calm and focused under pressure, while refining your decision-making strategies will ensure you can navigate complex situations with confidence. By addressing these areas, you'll be better equipped to tackle any obstacles and achieve your goals more effectively.",
                    color: "green"
                };
            case data >= 30 && data <= 39 :
                return {
                    desc: "You show potential, but there are several areas that need significant improvement. Consider incorporating regular stress-relief techniques, emotional intelligence training, and structured decision-making practices into your routine. Practicing stress-relief techniques will help you stay calm under pressure and maintain a positive outlook. Emotional intelligence training will aid you in understanding your emotions and managing them effectively. Structured decision-making practices will assist you in comprehending and resolving complex situations. By adopting these measures, you can enhance your abilities and make progress towards your goals.",
                    color: "#C6892C"
                };
            case data >= 20 && data <= 29 :
                return {
                    desc: "There are several areas of concern that need to be addressed. It's crucial to prioritize the development of better stress management techniques, emotional resilience, and consistent study habits. Improving your stress management skills will empower you to handle pressure effectively; while enhancing emotional resilience will help you bounce back from setbacks with confidence. Developing consistent study habits will ensure you stay organized and focused on your goals.Don't hesitate to seek guidance from mentors and utilize resources that can support you in these areas of growth. By actively working on these aspects, you'll build a strong foundation for achieving success in your endeavours.",
                    color: "#F76F00"
                };
            case data >= 0 && data <= 19 :
                return {
                    desc: "Your responses indicate major development is needed in almost all aspects. It's essential to prioritize building a strong foundation in stress management, emotional intelligence, and disciplined study routines. These skills are crucial for navigating challenges effectively and achieving your goals. Seeking professional guidance or training can provide valuable insights and strategies to accelerate your growth in these areas. By committing to improving these foundational skills, you'll enhance your readiness and capability to succeed in your endeavours.",
                    color: "#ff0000"
                };
            default:
                return "Invalid data";

        }
    }
    const descHindi = (data) => {
        switch (true) {
            case data >= 50 && data <= 60 :
                return {
                    desc: "आपने उत्कृष्ट तनाव प्रबंधन, भावनात्मक दृढ़ता, और निर्णय लेने के कौशल का प्रदर्शन किया है, जो आपकी परीक्षा की तैयारी के लिए बहुत महत्वपूर्ण हैं। दबाव में शांत रहने और सकारात्मक सोच बनाए रखने की आपकी क्षमता सराहनीय है, और ये गुण न केवल आपकी परीक्षाओं में बल्कि आपके भविष्य के करियर में भी आपको अच्छी तरह से सेवा देंगे। अच्छा काम जारी रखें, अपने कौशल को परिष्कृत करते रहें, और याद रखें कि निरंतर प्रयास और आत्मविश्वास आपके लक्ष्यों को प्राप्त करने की कुंजी हैं। आपके दृढ़ संकल्प और दृढ़ता के साथ, आप किसी भी चुनौती को पार करने के लिए अच्छी तरह से सुसज्जित हैं।",
                    color: "#325343"
                }
            case data >= 40 && data <= 49 :
                return {
                    desc: "आपने अच्छे कौशल और व्यवहार का प्रदर्शन किया है, लेकिन कुछ क्षेत्रों में सुधार की आवश्यकता है। आने वाली चुनौतियों के लिए पूरी तरह से तैयार होने के लिए अपने तनाव प्रबंधन तकनीकों और निर्णय लेने की रणनीतियों को बढ़ाने पर ध्यान दें। तनाव प्रबंधन कौशल को विकसित करना आपको दबाव में शांत और केंद्रित रहने में मदद करेगा, जबकि निर्णय लेने की रणनीतियों को परिष्कृत करना सुनिश्चित करेगा कि आप जटिल परिस्थितियों को आत्मविश्वास के साथ संभाल सकें। इन क्षेत्रों पर काम करके, आप किसी भी बाधा का मुकाबला करने और अपने लक्ष्यों को अधिक प्रभावी ढंग से प्राप्त करने के लिए बेहतर सुसज्जित होंगे।",
                    color: "green"
                };
            case data >= 30 && data <= 39 :
                return {
                    desc: "आपमें संभावना है, लेकिन कई क्षेत्रों में विशेष अभिवृद्धि की आवश्यकता है। अपनी रूटीन में नियमित तनाव-मुक्ति तकनीकों, भावनात्मक बुद्धिमत्ता प्रशिक्षण, और संरचित निर्णय लेने की प्रथाओं को शामिल करने का विचार करें। तनाव-मुक्ति तकनीकों का अभ्यास आपको दबाव के तहत शांत रहने और सकारात्मक दृष्टिकोण बनाए रखने में मदद करेगा, भावनात्मक बुद्धिमत्ता प्रशिक्षण आपको अपनी भावनाओं को समझने और प्रभावी रूप से प्रबंधित करने में मदद करेगा, और संरचित निर्णय लेने की प्रथाएँ आपको जटिल स्थितियों को समझने और उन्हें हल करने में मदद करेंगी। इन सभी उपायों को अपनाकर, आप अपनी क्षमताओं को सुधार सकते हैं और अपने लक्ष्यों की दिशा में प्रगति कर सकते हैं।",
                    color: "#C6892C"
                };
            case data >= 20 && data <= 29 :
                return {
                    desc: "कई चिंता के क्षेत्र हैं जिन्हें संबोधित करने की आवश्यकता है। अच्छे तनाव प्रबंधन तकनीकों, भावनात्मक संघर्षशीलता, और नियमित अध्ययन आदतों के विकास पर ध्यान केंद्रित करें। इन तकनीकों को सुधारकर आप दबाव को सही ढंग से संभाल सकेंगे, भावनात्मक संघर्षशीलता को बढ़ाकर आप संकटों से विश्वासपूर्वक उभर सकेंगे, और नियमित अध्ययन आदतें आपको आपके लक्ष्यों पर संगठित और ध्यानित रहने में मदद करेंगी। इन क्षेत्रों में सुधार के लिए मार्गदर्शन और संसाधनों की खोज करें। इन पहलुओं पर सक्रिय रूप से काम करके, आप अपने प्रयासों में सफलता प्राप्त करने के लिए मजबूत आधार बना सकेंगे।",
                    color: "#F76F00"
                };
            case data >= 0 && data <= 19 :
                return {
                    desc: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें। इन कौशलों को सही दिशा में विकसित करना मुश्किलाहटों को सफलतापूर्वक निभाने और अपने लक्ष्यों को प्राप्त करने के लिए महत्वपूर्ण है। पेशेवर मार्गदर्शन या प्रशिक्षण लेना इन क्षेत्रों में आपके विकास को गति देने के लिए महत्वपूर्ण हो सकता है। इन बुनियादी कौशलों को सुधारने के लिए प्रतिबद्ध रहकर, आप अपनी तैयारी को मजबूत करेंगे और अपने प्रयासों में सफलता प्राप्त करने की क्षमता को बढ़ाएंगे।",
                    color: "#ff0000"
                };
            default:
                return "Invalid data";

        }
    }

    return (
        <>
            <Box sx={{mt: 20, mb: 5}}>
                <Container>
                    <Box
                        sx={{fontSize: '28px', fontWeight: '700', textAlign: 'center'}}
                        className="overpass title"
                    >
                        Assessment Score
                    </Box>
                    <Box sx={{textAlign: 'center', color: 'gray'}}>
                        Here are your results
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "center", my: 3}}>
                        <Gauge
                            {...settings}
                            value={per}
                            startAngle={-110}
                            endAngle={110}
                            sx={{
                                [`& .${gaugeClasses.valueText}`]: {
                                    fontSize: 40,
                                    transform: 'translate(0px, 0px)',
                                    fontWeight: 700
                                },
                                "& .css-b9rdri-MuiGauge-referenceArc": {
                                    fill: "#325343 !important"
                                }
                            }}
                            text={id}
                        />
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Box sx={{textAlign: "center", width: "250px", fontSize: "18px"}} className={"overpass"}>
                            Interpretation and feedback based on your inputs</Box>
                    </Box>

                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Box sx={{
                            width: {sm:"500px",xs:"100%"},
                            backgroundColor: "#397a4a4a",
                            my: "30px",
                            padding: "20px",
                            borderRadius: "15px"
                        }}>
                            {language == "english" ?  descEng(id).desc :descHindi(id).desc }
                        </Box>
                    </Box>

                </Container>
            </Box>
        </>
    );
}

export default PointTable;
