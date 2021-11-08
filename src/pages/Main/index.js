import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { ColorBlack, ColorPrimary, ColorSecondary, ColorWhite, SIZES } from "../../utils/constanta";

const Main = ({ navigation }) => {
    const [player1, setPlayer1] = useState('');
    const [chip1, setChip1] = useState('0')
    const [betP1, setBetP1] = useState('0');
    const [totalBetP1, setTotalBetP1] = useState(0);
    const [player2, setPlayer2] = useState('');
    const [chip2, setChip2] = useState('0')
    const [betP2, setBetP2] = useState('0');
    const [totalBetP2, setTotalBetP2] = useState(0);
    const [player3, setPlayer3] = useState('');
    const [chip3, setChip3] = useState('0')
    const [betP3, setBetP3] = useState('0');
    const [totalBetP3, setTotalBetP3] = useState(0);
    const [player4, setPlayer4] = useState('');
    const [chip4, setChip4] = useState('0')
    const [betP4, setBetP4] = useState('0');
    const [totalBetP4, setTotalBetP4] = useState(0);
    const [player5, setPlayer5] = useState('');
    const [chip5, setChip5] = useState('0')
    const [betP5, setBetP5] = useState('0');
    const [totalBetP5, setTotalBetP5] = useState(0);
    const [player6, setPlayer6] = useState('');
    const [chip6, setChip6] = useState('0')
    const [betP6, setBetP6] = useState('0');
    const [totalBetP6, setTotalBetP6] = useState(0);
    const [historyGame, setHistoryGame] = useState([]);

    const plusBet1 = () => {
        const substractBet = parseInt(chip1) - parseInt(betP1);
        const sumBet = parseInt(totalBetP1) + parseInt(betP1)
        setTotalBetP1(sumBet);
        setBetP1('0')
        setChip1(String(substractBet))
    }

    const plusBet2 = () => {
        const substractBet = parseInt(chip2) - parseInt(betP2);
        const sumBet = parseInt(totalBetP2) + parseInt(betP2)
        setTotalBetP2(sumBet);
        setBetP2('0')
        setChip2(String(substractBet))
    }

    const plusBet3 = () => {
        const substractBet = parseInt(chip3) - parseInt(betP3);
        const sumBet = parseInt(totalBetP3) + parseInt(betP3)
        setTotalBetP3(sumBet);
        setBetP3('0')
        setChip3(String(substractBet))
    }

    const plusBet4 = () => {
        const substractBet = parseInt(chip4) - parseInt(betP4);
        const sumBet = parseInt(totalBetP4) + parseInt(betP4)
        setTotalBetP4(sumBet);
        setBetP4('0')
        setChip4(String(substractBet))
    }

    const plusBet5 = () => {
        const substractBet = parseInt(chip5) - parseInt(betP5);
        const sumBet = parseInt(totalBetP5) + parseInt(betP5)
        setTotalBetP5(sumBet);
        setBetP5('0')
        setChip5(String(substractBet))
    }

    const plusBet6 = () => {
        const substractBet = parseInt(chip6) - parseInt(betP6);
        const sumBet = parseInt(totalBetP6) + parseInt(betP6)
        setTotalBetP6(sumBet);
        setBetP6('0')
        setChip6(String(substractBet))
    }

    const allInP1 = () => {
        Alert.alert(
            `All In`,
            `All In ${player1}?`,
            [
                {
                    text: 'Tidak',
                    style: 'cancel',
                },
                {
                    text: 'Ya',
                    onPress: () => {
                        const sumBet = parseInt(totalBetP1) + parseInt(chip1);
                        setTotalBetP1(sumBet)
                        setBetP1('0')
                        setChip1('0')
                    },
                },
            ],
        );
    }

    const allInP2 = () => {
        Alert.alert(
            `All In`,
            `All In ${player2}?`,
            [
                {
                    text: 'Tidak',
                    style: 'cancel',
                },
                {
                    text: 'Ya',
                    onPress: () => {
                        const sumBet = parseInt(totalBetP2) + parseInt(chip2);
                        setTotalBetP2(sumBet)
                        setBetP2('0')
                        setChip2('0')
                    },
                },
            ],
        );
    }

    const allInP3 = () => {
        Alert.alert(
            `All In`,
            `All In ${player3}?`,
            [
                {
                    text: 'Tidak',
                    style: 'cancel',
                },
                {
                    text: 'Ya',
                    onPress: () => {
                        const sumBet = parseInt(totalBetP3) + parseInt(chip3);
                        setTotalBetP3(sumBet)
                        setBetP3('0')
                        setChip3('0')
                    },
                },
            ],
        );
    }

    const allInP4 = () => {
        Alert.alert(
            `All In`,
            `All In ${player4}?`,
            [
                {
                    text: 'Tidak',
                    style: 'cancel',
                },
                {
                    text: 'Ya',
                    onPress: () => {
                        const sumBet = parseInt(totalBetP4) + parseInt(chip4);
                        setTotalBetP4(sumBet)
                        setBetP4('0')
                        setChip4('0')
                    },
                },
            ],
        );
    }

    const allInP5 = () => {
        Alert.alert(
            `All In`,
            `All In ${player5}?`,
            [
                {
                    text: 'Tidak',
                    style: 'cancel',
                },
                {
                    text: 'Ya',
                    onPress: () => {
                        const sumBet = parseInt(totalBetP5) + parseInt(chip5);
                        setTotalBetP5(sumBet)
                        setBetP5('0')
                        setChip5('0')
                    },
                },
            ],
        );
    }

    const allInP6 = () => {
        Alert.alert(
            `All In`,
            `All In ${player6}?`,
            [
                {
                    text: 'Tidak',
                    style: 'cancel',
                },
                {
                    text: 'Ya',
                    onPress: () => {
                        const sumBet = parseInt(totalBetP6) + parseInt(chip6);
                        setTotalBetP6(sumBet)
                        setBetP6('0')
                        setChip6('0')
                    },
                },
            ],
        );
    }

    const startGame = () => {
        Alert.alert(
            'Start Game',
            'Start new game?',
            [
                {
                    text: 'Tidak',
                    style: 'cancel',
                },
                {
                    text: 'Ya',
                    onPress: () => {
                        const sumBet1 = parseInt(chip1) - 2000;
                        const sumBet2 = parseInt(chip2) - 2000;
                        const sumBet3 = parseInt(chip3) - 2000;
                        const sumBet4 = parseInt(chip4) - 2000;

                        setTotalBetP1(2000)
                        setTotalBetP2(2000)
                        setTotalBetP3(2000)
                        setTotalBetP4(2000)

                        setChip1(String(sumBet1))
                        setChip2(String(sumBet2))
                        setChip3(String(sumBet3))
                        setChip4(String(sumBet4))

                        if (player5 != '') {
                            const sumBet5 = parseInt(chip5) - 2000;
                            setTotalBetP5(2000)
                            setChip5(String(sumBet5))
                        }

                        if (player6 != '') {
                            const sumBet6 = parseInt(chip6) - 2000;
                            setTotalBetP6(2000)
                            setChip6(String(sumBet6))
                        }
                    },
                },
            ]
        )
    }

    const winP1 = () => {
        Alert.alert(
            `Win`,
            `Win ${player1}?`,
            [
                {
                    text: 'Tidak',
                    style: 'cancel',
                },
                {
                    text: 'Ya',
                    onPress: () => {
                        const totalBet = parseInt(totalBetP1) + parseInt(totalBetP2) + parseInt(totalBetP3) + parseInt(totalBetP4) + parseInt(totalBetP5) + parseInt(totalBetP6);
                        const totalChip = parseInt(chip1) + parseInt(totalBet)
                        setChip1(String(totalChip))
                        setHistoryGame([...historyGame, { nama: player1, prize: totalBet }])
                        resetBet()
                    },
                },
            ],
        )
    }

    const winP2 = () => {
        Alert.alert(
            `Win`,
            `Win ${player2}?`,
            [
                {
                    text: 'Tidak',
                    style: 'cancel',
                },
                {
                    text: 'Ya',
                    onPress: () => {
                        const totalBet = parseInt(totalBetP1) + parseInt(totalBetP2) + parseInt(totalBetP3) + parseInt(totalBetP4) + parseInt(totalBetP5) + parseInt(totalBetP6);
                        const totalChip = parseInt(chip2) + parseInt(totalBet)
                        setChip2(String(totalChip))
                        setHistoryGame([...historyGame, { nama: player2, prize: totalBet }])
                        resetBet()
                    },
                },
            ],
        )
    }

    const winP3 = () => {
        Alert.alert(
            `Win`,
            `Win ${player3}?`,
            [
                {
                    text: 'Tidak',
                    style: 'cancel',
                },
                {
                    text: 'Ya',
                    onPress: () => {
                        const totalBet = parseInt(totalBetP1) + parseInt(totalBetP2) + parseInt(totalBetP3) + parseInt(totalBetP4) + parseInt(totalBetP5) + parseInt(totalBetP6);
                        const totalChip = parseInt(chip3) + parseInt(totalBet)
                        setChip3(String(totalChip))
                        setHistoryGame([...historyGame, { nama: player3, prize: totalBet }])
                        resetBet()
                    },
                },
            ],
        )
    }

    const winP4 = () => {
        Alert.alert(
            `Win`,
            `Win ${player4}?`,
            [
                {
                    text: 'Tidak',
                    style: 'cancel',
                },
                {
                    text: 'Ya',
                    onPress: () => {
                        const totalBet = parseInt(totalBetP1) + parseInt(totalBetP2) + parseInt(totalBetP3) + parseInt(totalBetP4) + parseInt(totalBetP5) + parseInt(totalBetP6);
                        const totalChip = parseInt(chip4) + parseInt(totalBet)
                        setChip4(String(totalChip))
                        setHistoryGame([...historyGame, { nama: player4, prize: totalBet }])
                        resetBet()
                    },
                },
            ],
        )
    }

    const winP5 = () => {
        Alert.alert(
            `Win`,
            `Win ${player5}?`,
            [
                {
                    text: 'Tidak',
                    style: 'cancel',
                },
                {
                    text: 'Ya',
                    onPress: () => {
                        const totalBet = parseInt(totalBetP1) + parseInt(totalBetP2) + parseInt(totalBetP3) + parseInt(totalBetP4) + parseInt(totalBetP5) + parseInt(totalBetP6);
                        const totalChip = parseInt(chip5) + parseInt(totalBet)
                        setChip5(String(totalChip))
                        setHistoryGame([...historyGame, { nama: player5, prize: totalBet }])
                        resetBet()
                    },
                },
            ],
        )
    }

    const winP6 = () => {
        Alert.alert(
            `Win`,
            `Win ${player6}?`,
            [
                {
                    text: 'Tidak',
                    style: 'cancel',
                },
                {
                    text: 'Ya',
                    onPress: () => {
                        const totalBet = parseInt(totalBetP1) + parseInt(totalBetP2) + parseInt(totalBetP3) + parseInt(totalBetP4) + parseInt(totalBetP5) + parseInt(totalBetP6);
                        const totalChip = parseInt(chip6) + parseInt(totalBet)
                        setChip6(String(totalChip))
                        setHistoryGame([...historyGame, { nama: player6, prize: totalBet }])
                        resetBet()
                    },
                },
            ],
        )
    }

    const resetBet = () => {
        setTotalBetP1(0)
        setTotalBetP2(0)
        setTotalBetP3(0)
        setTotalBetP4(0)
        setTotalBetP5(0)
        setTotalBetP6(0)
    }

    const historyReset = () => {
        setHistoryGame([])
    }

    return (
        <View style={{ backgroundColor: ColorSecondary, flex: 1 }}>
            <View style={styles.input}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nama"
                    onChangeText={text => setPlayer1(text)}
                    value={player1}
                />
                <TextInput
                    style={styles.chipInput}
                    placeholder="Chip"
                    keyboardType='numeric'
                    onChangeText={text => setChip1(text)}
                    value={chip1}
                />
                <View style={styles.viewBet}>
                    <Text>{totalBetP1}</Text>
                </View>
                <TextInput
                    style={styles.betInput}
                    placeholder="Bet"
                    keyboardType='numeric'
                    onChangeText={text => setBetP1(text)}
                    value={betP1}
                />
                <View style={styles.plusBet}>
                    <Button title='+' color={ColorPrimary} onPress={plusBet1} />
                </View>
                <View style={styles.winBet}>
                    <Button title='&loz;' color={ColorPrimary} onPress={allInP1} />
                </View>
                <View style={styles.winBet}>
                    <Button title='Win' color={ColorBlack} onPress={winP1} />
                </View>
            </View>

            <View style={styles.input}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nama"
                    onChangeText={text => setPlayer2(text)}
                    value={player2}
                />
                <TextInput
                    style={styles.chipInput}
                    placeholder="Chip"
                    keyboardType='numeric'
                    onChangeText={text => setChip2(text)}
                    value={chip2}
                />
                <View style={styles.viewBet}>
                    <Text>{totalBetP2}</Text>
                </View>
                <TextInput
                    style={styles.betInput}
                    placeholder="Bet"
                    keyboardType='numeric'
                    onChangeText={text => setBetP2(text)}
                    value={betP2}
                />
                <View style={styles.plusBet}>
                    <Button title='+' color={ColorPrimary} onPress={plusBet2} />
                </View>
                <View style={styles.winBet}>
                    <Button title='&loz;' color={ColorPrimary} onPress={allInP2} />
                </View>
                <View style={styles.winBet}>
                    <Button title='Win' color={ColorBlack} onPress={winP2} />
                </View>
            </View>

            <View style={styles.input}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nama"
                    onChangeText={text => setPlayer3(text)}
                    value={player3}
                />
                <TextInput
                    style={styles.chipInput}
                    placeholder="Chip"
                    keyboardType='numeric'
                    onChangeText={text => setChip3(text)}
                    value={chip3}
                />
                <View style={styles.viewBet}>
                    <Text>{totalBetP3}</Text>
                </View>
                <TextInput
                    style={styles.betInput}
                    placeholder="Bet"
                    keyboardType='numeric'
                    onChangeText={text => setBetP3(text)}
                    value={betP3}
                />
                <View style={styles.plusBet}>
                    <Button title='+' color={ColorPrimary} onPress={plusBet3} />
                </View>
                <View style={styles.winBet}>
                    <Button title='&loz;' color={ColorPrimary} onPress={allInP3} />
                </View>
                <View style={styles.winBet}>
                    <Button title='Win' color={ColorBlack} onPress={winP3} />
                </View>
            </View>

            <View style={styles.input}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nama"
                    onChangeText={text => setPlayer4(text)}
                    value={player4}
                />
                <TextInput
                    style={styles.chipInput}
                    placeholder="Chip"
                    keyboardType='numeric'
                    onChangeText={text => setChip4(text)}
                    value={chip4}
                />
                <View style={styles.viewBet}>
                    <Text>{totalBetP4}</Text>
                </View>
                <TextInput
                    style={styles.betInput}
                    placeholder="Bet"
                    keyboardType='numeric'
                    onChangeText={text => setBetP4(text)}
                    value={betP4}
                />
                <View style={styles.plusBet}>
                    <Button title='+' color={ColorPrimary} onPress={plusBet4} />
                </View>
                <View style={styles.winBet}>
                    <Button title='&loz;' color={ColorPrimary} onPress={allInP4} />
                </View>
                <View style={styles.winBet}>
                    <Button title='Win' color={ColorBlack} onPress={winP4} />
                </View>
            </View>

            <View style={styles.input}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nama"
                    onChangeText={text => setPlayer5(text)}
                    value={player5}
                />
                <TextInput
                    style={styles.chipInput}
                    placeholder="Chip"
                    keyboardType='numeric'
                    onChangeText={text => setChip5(text)}
                    value={chip5}
                />
                <View style={styles.viewBet}>
                    <Text>{totalBetP5}</Text>
                </View>
                <TextInput
                    style={styles.betInput}
                    placeholder="Bet"
                    keyboardType='numeric'
                    onChangeText={text => setBetP5(text)}
                    value={betP5}
                />
                <View style={styles.plusBet}>
                    <Button title='+' color={ColorPrimary} onPress={plusBet5} />
                </View>
                <View style={styles.winBet}>
                    <Button title='&loz;' color={ColorPrimary} onPress={allInP5} />
                </View>
                <View style={styles.winBet}>
                    <Button title='Win' color={ColorBlack} onPress={winP5} />
                </View>
            </View>

            <View style={styles.input}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nama"
                    onChangeText={text => setPlayer6(text)}
                    value={player6}
                />
                <TextInput
                    style={styles.chipInput}
                    placeholder="Chip"
                    keyboardType='numeric'
                    onChangeText={text => setChip6(text)}
                    value={chip6}
                />
                <View style={styles.viewBet}>
                    <Text>{totalBetP6}</Text>
                </View>
                <TextInput
                    style={styles.betInput}
                    placeholder="Bet"
                    keyboardType='numeric'
                    onChangeText={text => setBetP6(text)}
                    value={betP6}
                />
                <View style={styles.plusBet}>
                    <Button title='+' color={ColorPrimary} onPress={plusBet6} />
                </View>
                <View style={styles.winBet}>
                    <Button title='&loz;' color={ColorPrimary} onPress={allInP6} />
                </View>
                <View style={styles.winBet}>
                    <Button title='Win' color={ColorBlack} onPress={winP6} />
                </View>
            </View>

            <View style={styles.viewTotal}>
                <Button title="Start" style={styles.btnStart} color={ColorPrimary} onPress={startGame} />
                <Text style={{ marginTop: 10, fontSize: 18, color: ColorWhite }}>
                    Total Bet : {parseInt(totalBetP1) + parseInt(totalBetP2) + parseInt(totalBetP3) + parseInt(totalBetP4) + parseInt(totalBetP5) + parseInt(totalBetP6)}
                </Text>
                <Text style={{ marginTop: 10 }}>
                    Total Chip : {parseInt(chip1) + parseInt(chip2) + parseInt(chip3) + parseInt(chip4) + parseInt(chip5) + parseInt(chip6)}
                </Text>
            </View>
            <ScrollView style={{ backgroundColor: ColorSecondary, marginTop: 10 }}>
                {historyGame.length > 0
                    && <View style={{ width: 100, marginLeft: 20 }}>
                        <Button title="Reset History" color={ColorPrimary} onPress={historyReset} />
                    </View>
                }

                <Text style={{ marginHorizontal: 20, fontWeight: "bold", color: ColorWhite, fontSize: 20 }}>History Game</Text>
                {historyGame.length > 0 && historyGame.map((data, index) => {
                    return (
                        <View style={styles.listHistory} key={index}>
                            <Text>{index + 1}. {data.nama}</Text>
                            <Text>{data.prize}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({
    input: {
        marginTop: 5,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        borderColor: ColorBlack,
        borderWidth: 1,
        color: ColorWhite,
        width: 100,
        marginHorizontal: 5
    },
    chipInput: {
        height: 40,
        borderColor: ColorBlack,
        borderWidth: 1,
        color: ColorWhite,
        width: 90,
        marginHorizontal: 5
    },
    betInput: {
        height: 40,
        borderColor: ColorBlack,
        borderWidth: 1,
        color: ColorWhite,
        width: 70,
    },
    plusBet: {
        padding: 5,
        marginLeft: 10,
    },
    winBet: {
        padding: 5,
        marginLeft: 2,
    },
    viewBet: {
        width: 70,
        marginLeft: 5
    },
    viewTotal: {
        marginTop: 10,
        marginHorizontal: 20,
        display: "flex",
        flexDirection: "column"
    },
    btnStart: {
        width: 30,
    },
    listHistory: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop: 10
    }
});