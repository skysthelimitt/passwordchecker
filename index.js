document.addEventListener("DOMContentLoaded", () => {
  password = document.getElementById("password");
  bar = document.getElementById("security");
  password.addEventListener("input", () => {
    console.log(password.value);
    if (password.value) {
      lengthscore = password.value.length * 10; // length = 10% of the score
      specialscore = ((password.value.match(/[!@#$%^&*()]/g) || []).length / password.value.length) * 25; // # of special chars = 25% of the score
      upperscore = ((password.value.match(/[ABCDEFGHIJKLMNOPQRSUVWXYZ]/g) || []).length / password.value.length) * 25; // # of uppercase chars = 25% of the score
      numscore = ((password.value.match(/[123456789]/g) || []).length / password.value.length) * 25; // # of # = 25% of the score
      lowerscore = ((password.value.match(/[abcdefghijklmnopqrstuvwxyz]/g) || []).length / password.value.length) * 5; // # of lowercase chars = 5% of the score
      combinedscore = (lengthscore + specialscore + upperscore + lowerscore) / (1 + spache.some(element => password.value.indexOf(element) !== -1) * 0.2 + /(..).*\1/.test(password.value) * 0.3); // combiining scores + adding penalties for dicttionary words and repeated chars
      if (password.value) security.value = Math.floor(combinedscore ** 2 / 100) / 300; // setting the progress bar to the right value - adding a bit of an exponential curve to the result
    }
  });
});

/**
 * https://github.com/words/spache but modified slightly
 */
const spache = ["able", "about", "above", "across", "act", "add", "afraid", "after", "afternoon", "again", "against", "ago", "air", "airplane", "alarm", "all", "almost", "alone", "along", "already", "also", "always", "among", "and", "angry", "animal", "another", "answer", "any", "anyone", "appear", "apple", "are", "arm", "around", "arrow", "ask", "asleep", "ate", "attention", "aunt", "awake", "away", "baby", "back", "bad", "bag", "ball", "balloon", "bang", "bank", "bark", "barn", "basket", "bean", "bear", "beat", "beautiful", "became", "because", "become", "bed", "bee", "been", "before", "began", "begin", "behind", "believe", "bell", "belong", "bend", "bent", "beside", "best", "better", "between", "big", "bird", "birthday", "bit", "bite", "black", "blanket", "blew", "block", "blow", "blue", "board", "boat", "book", "boot", "born", "borrow", "both", "bother", "bottle", "bottom", "bought", "bow", "box", "boy", "branch", "brave", "bread", "break", "breakfast", "breath", "brick", "bridge", "bright", "bring", "broke", "broken", "brother", "brought", "brown", "brush", "build", "bump", "burn", "bus", "busy", "but", "butter", "button", "buy", "cabin", "cage", "cake", "call", "came", "camp", "can", "cant", "candle", "candy", "cap", "captain", "car", "card", "care", "careful", "carrot", "carry", "case", "castle", "cat", "catch", "cattle", "caught", "cause", "cent", "certain", "chair", "chance", "change", "chase", "chicken", "chief", "child", "children", "church", "circle", "circus", "city", "clap", "clean", "clever", "cliff", "climb", "clock", "close", "cloth", "clothes", "clown", "coat", "cold", "color", "come", "comfortable", "company", "contest", "continue", "cook", "cool", "corner", "could", "count", "country", "course", "cover", "cow", "crawl", "cream", "cry", "cup", "curtain", "cut", "dad", "dance", "danger", "dangerous", "dark", "dash", "daughter", "day", "dear", "decide", "deep", "desk", "did", "didnt", "die", "different", "dig", "dinner", "direction", "disappear", "disappoint", "discover", "distance", "doctor", "does", "dog", "dollar", "dont", "done", "door", "down", "dragon", "dream", "dress", "drink", "drive", "drop", "drove", "dry", "duck", "during", "dust", "each", "eager", "ear", "early", "earn", "earth", "easy", "eat", "edge", "egg", "eight", "eighteen", "either", "elephant", "else", "empty", "end", "enemy", "enough", "enter", "even", "ever", "every", "everything", "exact", "except", "excite", "exclaim", "explain", "eye", "face", "fact", "fair", "fall", "family", "far", "farm", "farmer", "farther", "fast", "fat", "father", "feather", "feed", "feel", "feet", "fell", "fellow", "felt", "fence", "few", "field", "fierce", "fight", "figure", "fill", "final", "find", "fine", "finger", "finish", "fire", "first", "fish", "five", "flag", "flash", "flat", "flew", "floor", "flower", "fly", "follow", "food", "for", "forest", "forget", "forth", "found", "four", "fourth", "fox", "fresh", "friend", "frighten", "frog", "from", "front", "fruit", "full", "fun", "funny", "fur", "game", "garden", "gasp", "gate", "gave", "get", "giant", "gift", "girl", "give", "glad", "glass", "goat", "gone", "good", "got", "grandfather", "grandmother", "grass", "gray", "great", "green", "grew", "grin", "ground", "group", "grow", "growl", "guess", "gun", "had", "hair", "half", "hall", "hand", "handle", "hang", "happen", "happiness", "happy", "hard", "harm", "has", "hat", "hate", "have", "hes", "head", "hear", "heard", "heavy", "held", "hello", "help", "hen", "her", "here", "herself", "hid", "hide", "high", "hill", "him", "himself", "his", "hit", "hold", "hole", "holiday", "home", "honey", "hop", "horn", "horse", "hot", "hour", "house", "how", "howl", "hum", "hundred", "hung", "hungry", "hunt", "hurry", "hurt", "husband", "ill", "ice", "idea", "imagine", "important", "inch", "indeed", "inside", "instead", "into", "invite", "its", "its", "jacket", "jar", "jet", "job", "join", "joke", "joy", "jump", "just", "keep", "kept", "key", "kick", "kill", "kind", "king", "kitchen", "kitten", "knee", "knew", "knock", "know", "ladder", "lady", "laid", "lake", "land", "large", "last", "late", "laugh", "lay", "lazy", "lead", "leap", "learn", "least", "leave", "left", "leg", "less", "let", "lets", "letter", "lick", "lift", "light", "like", "line", "lion", "list", "listen", "little", "live", "load", "long", "look", "lost", "lot", "loud", "love", "low", "luck", "lump", "lunch", "machine", "made", "magic", "mail", "make", "man", "many", "march", "mark", "market", "master", "matter", "may", "maybe", "mean", "meant", "meat", "meet", "melt", "men", "merry", "met", "middle", "might", "mile", "milk", "milkman", "mind", "mine", "minute", "miss", "mistake", "moment", "money", "monkey", "month", "more", "morning", "most", "mother", "mountain", "mouse", "mouth", "move", "much", "mud", "music", "must", "name", "near", "neck", "need", "needle", "neighbor", "neighborhood", "nest", "never", "new", "next", "nibble", "nice", "night", "nine", "nod", "noise", "none", "north", "nose", "not", "note", "nothing", "notice", "now", "number", "ocean", "off", "offer", "often", "old", "once", "one", "only", "open", "orange", "order", "other", "our", "out", "outside", "over", "owl", "own", "pack", "paid", "pail", "paint", "pair", "palace", "pan", "paper", "parade", "parent", "park", "part", "party", "pass", "past", "pasture", "path", "paw", "pay", "peanut", "peek", "pen", "penny", "people", "perfect", "perhaps", "person", "pet", "pick", "picket", "picnic", "picture", "pie", "piece", "pig", "pile", "pin", "place", "plan", "plant", "play", "pleasant", "please", "plenty", "plow", "point", "poke", "pole", "policeman", "pond", "poor", "pop", "postman", "pot", "potato", "pound", "pour", "practice", "prepare", "present", "pretend", "pretty", "princess", "prize", "probably", "problem", "promise", "protect", "proud", "puff", "pull", "puppy", "push", "put", "queen", "queer", "quick", "quiet", "quite", "rabbit", "raccoon", "race", "radio", "rag", "rain", "raise", "ran", "ranch", "rang", "reach", "read", "ready", "real", "red", "refuse", "remember", "reply", "rest", "return", "reward", "rich", "ride", "right", "ring", "river", "road", "roar", "rock", "rode", "roll", "roof", "room", "rope", "round", "row", "rub", "rule", "run", "rush", "sad", "safe", "said", "sail", "sale", "salt", "same", "sand", "sang", "sat", "save", "saw", "say", "scare", "school", "scold", "scratch", "scream", "sea", "seat", "second", "secret", "see", "seed", "seem", "seen", "sell", "send", "sent", "seven", "several", "sew", "shadow", "shake", "shall", "shape", "she", "sheep", "shell", "shine", "ship", "shoe", "shone", "shook", "shoot", "shop", "shore", "short", "shot", "should", "show", "sick", "side", "sight", "sign", "signal", "silent", "silly", "silver", "since", "sing", "sister", "sit", "six", "size", "skip", "sky", "sled", "sleep", "slid", "slide", "slow", "small", "smart", "smell", "smile", "smoke", "snap", "sniff", "snow", "soft", "sold", "some", "something", "sometimes", "son", "song", "soon", "sorry", "sound", "speak", "special", "spend", "spill", "splash", "spoke", "spot", "spread", "spring", "squirrel", "stand", "star", "start", "station", "stay", "step", "stick", "still", "stone", "stood", "stop", "store", "story", "straight", "strange", "street", "stretch", "strike", "strong", "such", "sudden", "sugar", "suit", "summer", "sun", "supper", "suppose", "sure", "surprise", "swallow", "sweet", "swim", "swing", "table", "tail", "take", "talk", "tall", "tap", "taste", "teach", "teacher", "team", "tear", "teeth", "telephone", "tell", "ten", "tent", "than", "thank", "that", "thats", "the", "their", "them", "then", "there", "these", "they", "thick", "thin", "thing", "think", "third", "this", "those", "though", "thought", "three", "threw", "through", "throw", "tie", "tiger", "tight", "time", "tiny", "tip", "tire", "today", "toe", "together", "told", "tomorrow", "too", "took", "tooth", "top", "touch", "toward", "tower", "town", "toy", "track", "traffic", "train", "trap", "tree", "trick", "trip", "trot", "truck", "true", "trunk", "try", "turkey", "turn", "turtle", "twelve", "twin", "two", "ugly", "uncle", "under", "unhappy", "until", "upon", "upstairs", "use", "usual", "valley", "vegetable", "very", "village", "visit", "voice", "wag", "wagon", "wait", "wake", "walk", "want", "war", "warm", "was", "wash", "waste", "watch", "water", "wave", "way", "wear", "weather", "week", "well", "went", "were", "wet", "what", "wheel", "when", "where", "which", "while", "whisper", "whistle", "white", "who", "whole", "whose", "why", "wide", "wife", "will", "win", "wind", "window", "wing", "wink", "winter", "wire", "wise", "wish", "with", "without", "woke", "wolf", "woman", "women", "wont", "wonder", "wood", "word", "wore", "work", "world", "worm", "worry", "worth", "would", "wrong", "yard", "year", "yell", "yellow", "yes", "yet", "you", "young", "your", "zoo"];