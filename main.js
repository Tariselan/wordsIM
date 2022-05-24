let pages = {
    0: "index.html",
    1: "poems.html",
    2: "words.html"
}
function page(x) {
    window.location.replace(pages[x]);
}

// phrases -> 0 = I love you, 1 = I am the big cheese, 2 = Very, 3 = A lot, 4 = The big cat, 5 = The smollen (small kitten), 6 = Redacted
// language codes -> English = en, Spanish = es, French = fr, Italian = it, Hungarian = hu, Latin = la, Maori = mi
let phrases = {
    0: {
        en: {
            phr: "I love you",
            ipa: "[aɪ lʌv juː]"
        },
        es: {
            phr: "te amo",
            ipa: "[t̪e a.mo]"
        },
        fr: {
            phr: "j'adore toi",
            ipa: "[ʒa.dɔʁ twa]"
        },
        it: {
            phr: "ti amo",
            ipa: "[ti a.mo]"
        },
        hu: {
            phr: "szeretlek",
            ipa: "[sɛrɛtlɛk]"
        },
        la: {
            phr: "tē amō",
            ipa: "[t̪ɛː äːmo]"
        },
        mi: {
            phr: "kei te aroha au i a koe",
            ipa: "[kɛi t̼ɛ ɑrɔhɑ ɐu i ɑ kɔe]"
        }
    },
    1: {
        en: {
            phr: "I am the big cheese",
            ipa: "[aɪ lʌv juː]"
        },
        es: {
            phr: "Yo soy el queso grande",
            ipa: "[t̪e a.mo]"
        },
        fr: {
            phr: "Je suis le grande fromage",
            ipa: "[ʒa.dɔʁ twa]"
        },
        it: {
            phr: "ti amo",
            ipa: "[ti a.mo]"
        },
        hu: {
            phr: "szeretlek",
            ipa: "[sɛrɛtlɛk]"
        },
        la: {
            phr: "tē amō",
            ipa: "[t̪ɛː äːmo]"
        },
        mi: {
            phr: "kei te aroha au i a koe",
            ipa: "[kɛi t̼ɛ ɑrɔhɑ ɐu i ɑ kɔe]"
        }
    },
    2: {
        en: {
            phr: "I love you",
            ipa: "[aɪ lʌv juː]"
        },
        es: {
            phr: "te amo",
            ipa: "[t̪e a.mo]"
        },
        fr: {
            phr: "j'adore toi",
            ipa: "[ʒa.dɔʁ twa]"
        },
        it: {
            phr: "ti amo",
            ipa: "[ti a.mo]"
        },
        hu: {
            phr: "szeretlek",
            ipa: "[sɛrɛtlɛk]"
        },
        la: {
            phr: "tē amō",
            ipa: "[t̪ɛː äːmo]"
        },
        mi: {
            phr: "kei te aroha au i a koe",
            ipa: "[kɛi t̼ɛ ɑrɔhɑ ɐu i ɑ kɔe]"
        }
    },
    3: {
        en: {
            phr: "I love you",
            ipa: "[aɪ lʌv juː]"
        },
        es: {
            phr: "te amo",
            ipa: "[t̪e a.mo]"
        },
        fr: {
            phr: "j'adore toi",
            ipa: "[ʒa.dɔʁ twa]"
        },
        it: {
            phr: "ti amo",
            ipa: "[ti a.mo]"
        },
        hu: {
            phr: "szeretlek",
            ipa: "[sɛrɛtlɛk]"
        },
        la: {
            phr: "tē amō",
            ipa: "[t̪ɛː äːmo]"
        },
        mi: {
            phr: "kei te aroha au i a koe",
            ipa: "[kɛi t̼ɛ ɑrɔhɑ ɐu i ɑ kɔe]"
        }
    },
    4: {
        en: {
            phr: "I love you",
            ipa: "[aɪ lʌv juː]"
        },
        es: {
            phr: "te amo",
            ipa: "[t̪e a.mo]"
        },
        fr: {
            phr: "j'adore toi",
            ipa: "[ʒa.dɔʁ twa]"
        },
        it: {
            phr: "ti amo",
            ipa: "[ti a.mo]"
        },
        hu: {
            phr: "szeretlek",
            ipa: "[sɛrɛtlɛk]"
        },
        la: {
            phr: "tē amō",
            ipa: "[t̪ɛː äːmo]"
        },
        mi: {
            phr: "kei te aroha au i a koe",
            ipa: "[kɛi t̼ɛ ɑrɔhɑ ɐu i ɑ kɔe]"
        }
    },
    5: {
        en: {
            phr: "I love you",
            ipa: "[aɪ lʌv juː]"
        },
        es: {
            phr: "te amo",
            ipa: "[t̪e a.mo]"
        },
        fr: {
            phr: "j'adore toi",
            ipa: "[ʒa.dɔʁ twa]"
        },
        it: {
            phr: "ti amo",
            ipa: "[ti a.mo]"
        },
        hu: {
            phr: "szeretlek",
            ipa: "[sɛrɛtlɛk]"
        },
        la: {
            phr: "tē amō",
            ipa: "[t̪ɛː äːmo]"
        },
        mi: {
            phr: "kei te aroha au i a koe",
            ipa: "[kɛi t̼ɛ ɑrɔhɑ ɐu i ɑ kɔe]"
        }
    },
    6: {
        en: {
            phr: "I love you",
            ipa: "[aɪ lʌv juː]"
        },
        es: {
            phr: "te amo",
            ipa: "[t̪e a.mo]"
        },
        fr: {
            phr: "j'adore toi",
            ipa: "[ʒa.dɔʁ twa]"
        },
        it: {
            phr: "ti amo",
            ipa: "[ti a.mo]"
        },
        hu: {
            phr: "szeretlek",
            ipa: "[sɛrɛtlɛk]"
        },
        la: {
            phr: "tē amō",
            ipa: "[t̪ɛː äːmo]"
        },
        mi: {
            phr: "kei te aroha au i a koe",
            ipa: "[kɛi t̼ɛ ɑrɔhɑ ɐu i ɑ kɔe]"
        }
    }
}

function language(n) {} // change language