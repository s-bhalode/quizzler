import React, {useState, useEffect} from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const shuffleArray = (array) => {
    for(let i=array.length-1; i>=0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Quiz = ({navigation}) => {

    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    
    const getQuiz = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        const res = await fetch(url);
        const data = await res.json();
        // console.warn(data.results[0]);
        setQuestions(data.results);
        setOptions(generateOptionsAndShuffle(data.results[0]));
    }
    const generateOptionsAndShuffle = (_question) => {
        // console.warn(_question);
        const options = [..._question.incorrect_answers];
        options.push(_question.correct_answer);
        // console.warn(options);
        shuffleArray(options);

        return options;
    }

    const handleNextPress = () => {
        setQues(ques+1);
        setOptions(generateOptionsAndShuffle(questions[ques+1]));
    }
    
    const handleSelectedOption = (_option) => {
        if(_option === questions[ques].correct_answer){
            setScore(score+1);
        }
        if(ques !== 9){
            setQues(ques+1);
            setOptions(generateOptionsAndShuffle(questions[ques+1]));
        }
        if(ques === 9){
            navigation.navigate("Result", {
                score : score
            });
        }
    }
    const handleShowResult = () => {
        navigation.navigate("Result", {
            score : score
        });
    }

    useEffect(() => {
        getQuiz()
    }, []);

    return (
        <View style={styles.container}>
            {questions && (
                <View style={styles.parent}>
                    <View style={styles.top}>
                        <Text style={styles.question} >
                        Q. {decodeURI(questions[ques].question)}
                        </Text>
                    </View>
                    <View style={styles.options}>
                        <TouchableOpacity 
                        style={styles.optionButton}
                        onPress={() => handleSelectedOption(options[0])}>
                            <Text style={styles.option}>A. {decodeURI(options[0])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.optionButton}
                        onPress={() => handleSelectedOption(options[1])}>
                            <Text style={styles.option}>B. {decodeURI(options[1])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={styles.optionButton}
                        onPress={() => handleSelectedOption(options[2])}>
                            <Text style={styles.option}>C. {decodeURI(options[2])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={styles.optionButton}
                        onPress={() => handleSelectedOption(options[3])}>
                            <Text style={styles.option}>D. {decodeURI(options[3])}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottom}>
                        {/* <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>SKIP</Text>
                        </TouchableOpacity> */}
                        
                        {ques!==9 && 
                            <TouchableOpacity 
                            onPress={handleNextPress}
                            style={styles.button}>
                                <Text style={styles.buttonText}>NEXT</Text>
                            </TouchableOpacity>   
                        }
                        {ques===9 && 
                            <TouchableOpacity 
                            onPress={handleShowResult}
                            style={styles.button}>
                                <Text style={styles.buttonText}>SHOW RESULT</Text>
                            </TouchableOpacity>   
                        }

                        {/* <TouchableOpacity>
                            <Text>END</Text>
                        </TouchableOpacity> */}
                    </View>

                </View>
            )

            }
        </View>
    );
};



export default Quiz;

const styles = StyleSheet.create({
    container:{
        paddingTop : 40,
        paddingHorizontal : 20,
        backgroundColor: 'white',
        height: '100%'
    },
    top:{
        marginVertical: 16
    },
    options:{
        marginVertical: 16,
        flex : 1
    },
    bottom:{
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection : 'row'
    },
    button: {
        backgroundColor: '#256D85',
        padding: 12,
        borderRadius: 16,
        paddingHorizontal: 16,
        alignItems: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '700',
    },
    question:{
        fontSize: 28,
        color: 'black'
    },
    option: {
        fontSize: 18,
        fontWeight: '600',
        color: '#161E54'
    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#C7FFD8',
        padding: 12,
        borderRadius: 12
    }, 
    parent : {
        height: '100%'
    }
})