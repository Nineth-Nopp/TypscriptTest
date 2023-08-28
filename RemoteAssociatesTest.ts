function getQuestionPart1(phrases: string[]): string[] {

    let questionPart: string[] = [];

    phrases.map((letter) => letter.split(""));
    let commonWords: string[] = []

    for (const letter of phrases[2]) {
        if (phrases.every((parts) => parts.includes(letter))) {
            commonWords.push(letter);
        }
    }
    if (commonWords.length > 0) {
        let fullWords: string = '';
        for (let i = 0; i < commonWords.length; i++) {

            fullWords = fullWords + commonWords[i];
        }
        
        for (let part of phrases) {
            if (!part.includes(fullWords)) {
                let firstExeed: string = fullWords;
                let lastExeed: string = fullWords;
                do {
                    firstExeed = firstExeed.substring(1)
                } while (!part.includes(firstExeed) && firstExeed != "");
                do {
                    lastExeed = lastExeed.slice(0, lastExeed.length - 1)

                } while (!part.includes(lastExeed) && lastExeed != "");

                let firstNumber: number = firstExeed.split("").length;
                let lastNumber: number = lastExeed.split("").length;

                if (firstNumber > lastNumber) {
                    fullWords = firstExeed
                } else {
                    fullWords = lastExeed;
                }

            }
        }
        const setOfExclude = phrases.map(word => word.replace(fullWords, ""))
        questionPart = setOfExclude

    } else {
        console.log("No common words found.");
    }

    return questionPart
}


console.log(getQuestionPart1(["BATHROOM", "BATH SALTS", "BLOODBATH"]));

