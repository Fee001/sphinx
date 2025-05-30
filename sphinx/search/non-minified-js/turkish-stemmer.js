// Generated from turkish.sbl by Snowball 3.0.1 - https://snowballstem.org/

/**@constructor*/
var TurkishStemmer = function() {
    var base = new BaseStemmer();

    /** @const */ var a_0 = [
        ["m", -1, -1],
        ["n", -1, -1],
        ["miz", -1, -1],
        ["niz", -1, -1],
        ["muz", -1, -1],
        ["nuz", -1, -1],
        ["m\u00FCz", -1, -1],
        ["n\u00FCz", -1, -1],
        ["m\u0131z", -1, -1],
        ["n\u0131z", -1, -1]
    ];

    /** @const */ var a_1 = [
        ["leri", -1, -1],
        ["lar\u0131", -1, -1]
    ];

    /** @const */ var a_2 = [
        ["ni", -1, -1],
        ["nu", -1, -1],
        ["n\u00FC", -1, -1],
        ["n\u0131", -1, -1]
    ];

    /** @const */ var a_3 = [
        ["in", -1, -1],
        ["un", -1, -1],
        ["\u00FCn", -1, -1],
        ["\u0131n", -1, -1]
    ];

    /** @const */ var a_4 = [
        ["a", -1, -1],
        ["e", -1, -1]
    ];

    /** @const */ var a_5 = [
        ["na", -1, -1],
        ["ne", -1, -1]
    ];

    /** @const */ var a_6 = [
        ["da", -1, -1],
        ["ta", -1, -1],
        ["de", -1, -1],
        ["te", -1, -1]
    ];

    /** @const */ var a_7 = [
        ["nda", -1, -1],
        ["nde", -1, -1]
    ];

    /** @const */ var a_8 = [
        ["dan", -1, -1],
        ["tan", -1, -1],
        ["den", -1, -1],
        ["ten", -1, -1]
    ];

    /** @const */ var a_9 = [
        ["ndan", -1, -1],
        ["nden", -1, -1]
    ];

    /** @const */ var a_10 = [
        ["la", -1, -1],
        ["le", -1, -1]
    ];

    /** @const */ var a_11 = [
        ["ca", -1, -1],
        ["ce", -1, -1]
    ];

    /** @const */ var a_12 = [
        ["im", -1, -1],
        ["um", -1, -1],
        ["\u00FCm", -1, -1],
        ["\u0131m", -1, -1]
    ];

    /** @const */ var a_13 = [
        ["sin", -1, -1],
        ["sun", -1, -1],
        ["s\u00FCn", -1, -1],
        ["s\u0131n", -1, -1]
    ];

    /** @const */ var a_14 = [
        ["iz", -1, -1],
        ["uz", -1, -1],
        ["\u00FCz", -1, -1],
        ["\u0131z", -1, -1]
    ];

    /** @const */ var a_15 = [
        ["siniz", -1, -1],
        ["sunuz", -1, -1],
        ["s\u00FCn\u00FCz", -1, -1],
        ["s\u0131n\u0131z", -1, -1]
    ];

    /** @const */ var a_16 = [
        ["lar", -1, -1],
        ["ler", -1, -1]
    ];

    /** @const */ var a_17 = [
        ["niz", -1, -1],
        ["nuz", -1, -1],
        ["n\u00FCz", -1, -1],
        ["n\u0131z", -1, -1]
    ];

    /** @const */ var a_18 = [
        ["dir", -1, -1],
        ["tir", -1, -1],
        ["dur", -1, -1],
        ["tur", -1, -1],
        ["d\u00FCr", -1, -1],
        ["t\u00FCr", -1, -1],
        ["d\u0131r", -1, -1],
        ["t\u0131r", -1, -1]
    ];

    /** @const */ var a_19 = [
        ["cas\u0131na", -1, -1],
        ["cesine", -1, -1]
    ];

    /** @const */ var a_20 = [
        ["di", -1, -1],
        ["ti", -1, -1],
        ["dik", -1, -1],
        ["tik", -1, -1],
        ["duk", -1, -1],
        ["tuk", -1, -1],
        ["d\u00FCk", -1, -1],
        ["t\u00FCk", -1, -1],
        ["d\u0131k", -1, -1],
        ["t\u0131k", -1, -1],
        ["dim", -1, -1],
        ["tim", -1, -1],
        ["dum", -1, -1],
        ["tum", -1, -1],
        ["d\u00FCm", -1, -1],
        ["t\u00FCm", -1, -1],
        ["d\u0131m", -1, -1],
        ["t\u0131m", -1, -1],
        ["din", -1, -1],
        ["tin", -1, -1],
        ["dun", -1, -1],
        ["tun", -1, -1],
        ["d\u00FCn", -1, -1],
        ["t\u00FCn", -1, -1],
        ["d\u0131n", -1, -1],
        ["t\u0131n", -1, -1],
        ["du", -1, -1],
        ["tu", -1, -1],
        ["d\u00FC", -1, -1],
        ["t\u00FC", -1, -1],
        ["d\u0131", -1, -1],
        ["t\u0131", -1, -1]
    ];

    /** @const */ var a_21 = [
        ["sa", -1, -1],
        ["se", -1, -1],
        ["sak", -1, -1],
        ["sek", -1, -1],
        ["sam", -1, -1],
        ["sem", -1, -1],
        ["san", -1, -1],
        ["sen", -1, -1]
    ];

    /** @const */ var a_22 = [
        ["mi\u015F", -1, -1],
        ["mu\u015F", -1, -1],
        ["m\u00FC\u015F", -1, -1],
        ["m\u0131\u015F", -1, -1]
    ];

    /** @const */ var a_23 = [
        ["b", -1, 1],
        ["c", -1, 2],
        ["d", -1, 3],
        ["\u011F", -1, 4]
    ];

    /** @const */ var /** Array<int> */ g_vowel = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 8, 0, 0, 0, 0, 0, 0, 1];

    /** @const */ var /** Array<int> */ g_U = [1, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 1];

    /** @const */ var /** Array<int> */ g_vowel1 = [1, 64, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

    /** @const */ var /** Array<int> */ g_vowel2 = [17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130];

    /** @const */ var /** Array<int> */ g_vowel3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

    /** @const */ var /** Array<int> */ g_vowel4 = [17];

    /** @const */ var /** Array<int> */ g_vowel5 = [65];

    /** @const */ var /** Array<int> */ g_vowel6 = [65];

    var /** boolean */ B_continue_stemming_noun_suffixes = false;


    /** @return {boolean} */
    function r_check_vowel_harmony() {
        /** @const */ var /** number */ v_1 = base.limit - base.cursor;
        if (!base.go_out_grouping_b(g_vowel, 97, 305))
        {
            return false;
        }
        lab0: {
            /** @const */ var /** number */ v_2 = base.limit - base.cursor;
            lab1: {
                if (!(base.eq_s_b("a")))
                {
                    break lab1;
                }
                if (!base.go_out_grouping_b(g_vowel1, 97, 305))
                {
                    break lab1;
                }
                break lab0;
            }
            base.cursor = base.limit - v_2;
            lab2: {
                if (!(base.eq_s_b("e")))
                {
                    break lab2;
                }
                if (!base.go_out_grouping_b(g_vowel2, 101, 252))
                {
                    break lab2;
                }
                break lab0;
            }
            base.cursor = base.limit - v_2;
            lab3: {
                if (!(base.eq_s_b("\u0131")))
                {
                    break lab3;
                }
                if (!base.go_out_grouping_b(g_vowel3, 97, 305))
                {
                    break lab3;
                }
                break lab0;
            }
            base.cursor = base.limit - v_2;
            lab4: {
                if (!(base.eq_s_b("i")))
                {
                    break lab4;
                }
                if (!base.go_out_grouping_b(g_vowel4, 101, 105))
                {
                    break lab4;
                }
                break lab0;
            }
            base.cursor = base.limit - v_2;
            lab5: {
                if (!(base.eq_s_b("o")))
                {
                    break lab5;
                }
                if (!base.go_out_grouping_b(g_vowel5, 111, 117))
                {
                    break lab5;
                }
                break lab0;
            }
            base.cursor = base.limit - v_2;
            lab6: {
                if (!(base.eq_s_b("\u00F6")))
                {
                    break lab6;
                }
                if (!base.go_out_grouping_b(g_vowel6, 246, 252))
                {
                    break lab6;
                }
                break lab0;
            }
            base.cursor = base.limit - v_2;
            lab7: {
                if (!(base.eq_s_b("u")))
                {
                    break lab7;
                }
                if (!base.go_out_grouping_b(g_vowel5, 111, 117))
                {
                    break lab7;
                }
                break lab0;
            }
            base.cursor = base.limit - v_2;
            if (!(base.eq_s_b("\u00FC")))
            {
                return false;
            }
            if (!base.go_out_grouping_b(g_vowel6, 246, 252))
            {
                return false;
            }
        }
        base.cursor = base.limit - v_1;
        return true;
    };

    /** @return {boolean} */
    function r_mark_suffix_with_optional_n_consonant() {
        lab0: {
            /** @const */ var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                if (!(base.eq_s_b("n")))
                {
                    break lab1;
                }
                /** @const */ var /** number */ v_2 = base.limit - base.cursor;
                if (!(base.in_grouping_b(g_vowel, 97, 305)))
                {
                    break lab1;
                }
                base.cursor = base.limit - v_2;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            {
                /** @const */ var /** number */ v_3 = base.limit - base.cursor;
                lab2: {
                    /** @const */ var /** number */ v_4 = base.limit - base.cursor;
                    if (!(base.eq_s_b("n")))
                    {
                        break lab2;
                    }
                    base.cursor = base.limit - v_4;
                    return false;
                }
                base.cursor = base.limit - v_3;
            }
            /** @const */ var /** number */ v_5 = base.limit - base.cursor;
            if (base.cursor <= base.limit_backward)
            {
                return false;
            }
            base.cursor--;
            if (!(base.in_grouping_b(g_vowel, 97, 305)))
            {
                return false;
            }
            base.cursor = base.limit - v_5;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_suffix_with_optional_s_consonant() {
        lab0: {
            /** @const */ var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                if (!(base.eq_s_b("s")))
                {
                    break lab1;
                }
                /** @const */ var /** number */ v_2 = base.limit - base.cursor;
                if (!(base.in_grouping_b(g_vowel, 97, 305)))
                {
                    break lab1;
                }
                base.cursor = base.limit - v_2;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            {
                /** @const */ var /** number */ v_3 = base.limit - base.cursor;
                lab2: {
                    /** @const */ var /** number */ v_4 = base.limit - base.cursor;
                    if (!(base.eq_s_b("s")))
                    {
                        break lab2;
                    }
                    base.cursor = base.limit - v_4;
                    return false;
                }
                base.cursor = base.limit - v_3;
            }
            /** @const */ var /** number */ v_5 = base.limit - base.cursor;
            if (base.cursor <= base.limit_backward)
            {
                return false;
            }
            base.cursor--;
            if (!(base.in_grouping_b(g_vowel, 97, 305)))
            {
                return false;
            }
            base.cursor = base.limit - v_5;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_suffix_with_optional_y_consonant() {
        lab0: {
            /** @const */ var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                if (!(base.eq_s_b("y")))
                {
                    break lab1;
                }
                /** @const */ var /** number */ v_2 = base.limit - base.cursor;
                if (!(base.in_grouping_b(g_vowel, 97, 305)))
                {
                    break lab1;
                }
                base.cursor = base.limit - v_2;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            {
                /** @const */ var /** number */ v_3 = base.limit - base.cursor;
                lab2: {
                    /** @const */ var /** number */ v_4 = base.limit - base.cursor;
                    if (!(base.eq_s_b("y")))
                    {
                        break lab2;
                    }
                    base.cursor = base.limit - v_4;
                    return false;
                }
                base.cursor = base.limit - v_3;
            }
            /** @const */ var /** number */ v_5 = base.limit - base.cursor;
            if (base.cursor <= base.limit_backward)
            {
                return false;
            }
            base.cursor--;
            if (!(base.in_grouping_b(g_vowel, 97, 305)))
            {
                return false;
            }
            base.cursor = base.limit - v_5;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_suffix_with_optional_U_vowel() {
        lab0: {
            /** @const */ var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                if (!(base.in_grouping_b(g_U, 105, 305)))
                {
                    break lab1;
                }
                /** @const */ var /** number */ v_2 = base.limit - base.cursor;
                if (!(base.out_grouping_b(g_vowel, 97, 305)))
                {
                    break lab1;
                }
                base.cursor = base.limit - v_2;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            {
                /** @const */ var /** number */ v_3 = base.limit - base.cursor;
                lab2: {
                    /** @const */ var /** number */ v_4 = base.limit - base.cursor;
                    if (!(base.in_grouping_b(g_U, 105, 305)))
                    {
                        break lab2;
                    }
                    base.cursor = base.limit - v_4;
                    return false;
                }
                base.cursor = base.limit - v_3;
            }
            /** @const */ var /** number */ v_5 = base.limit - base.cursor;
            if (base.cursor <= base.limit_backward)
            {
                return false;
            }
            base.cursor--;
            if (!(base.out_grouping_b(g_vowel, 97, 305)))
            {
                return false;
            }
            base.cursor = base.limit - v_5;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_possessives() {
        if (base.find_among_b(a_0) == 0)
        {
            return false;
        }
        if (!r_mark_suffix_with_optional_U_vowel())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_sU() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (!(base.in_grouping_b(g_U, 105, 305)))
        {
            return false;
        }
        if (!r_mark_suffix_with_optional_s_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_lArI() {
        if (base.find_among_b(a_1) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_yU() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (!(base.in_grouping_b(g_U, 105, 305)))
        {
            return false;
        }
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_nU() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_2) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_nUn() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_3) == 0)
        {
            return false;
        }
        if (!r_mark_suffix_with_optional_n_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_yA() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_4) == 0)
        {
            return false;
        }
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_nA() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_5) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_DA() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_6) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_ndA() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_7) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_DAn() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_8) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_ndAn() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_9) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_ylA() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_10) == 0)
        {
            return false;
        }
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_ki() {
        if (!(base.eq_s_b("ki")))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_ncA() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_11) == 0)
        {
            return false;
        }
        if (!r_mark_suffix_with_optional_n_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_yUm() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_12) == 0)
        {
            return false;
        }
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_sUn() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_13) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_yUz() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_14) == 0)
        {
            return false;
        }
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_sUnUz() {
        if (base.find_among_b(a_15) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_lAr() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_16) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_nUz() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_17) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_DUr() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_18) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_cAsInA() {
        if (base.find_among_b(a_19) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_yDU() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_20) == 0)
        {
            return false;
        }
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_ysA() {
        if (base.find_among_b(a_21) == 0)
        {
            return false;
        }
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_ymUs_() {
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (base.find_among_b(a_22) == 0)
        {
            return false;
        }
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_yken() {
        if (!(base.eq_s_b("ken")))
        {
            return false;
        }
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_stem_nominal_verb_suffixes() {
        base.ket = base.cursor;
        B_continue_stemming_noun_suffixes = true;
        lab0: {
            /** @const */ var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                lab2: {
                    /** @const */ var /** number */ v_2 = base.limit - base.cursor;
                    lab3: {
                        if (!r_mark_ymUs_())
                        {
                            break lab3;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_2;
                    lab4: {
                        if (!r_mark_yDU())
                        {
                            break lab4;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_2;
                    lab5: {
                        if (!r_mark_ysA())
                        {
                            break lab5;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_2;
                    if (!r_mark_yken())
                    {
                        break lab1;
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab6: {
                if (!r_mark_cAsInA())
                {
                    break lab6;
                }
                lab7: {
                    /** @const */ var /** number */ v_3 = base.limit - base.cursor;
                    lab8: {
                        if (!r_mark_sUnUz())
                        {
                            break lab8;
                        }
                        break lab7;
                    }
                    base.cursor = base.limit - v_3;
                    lab9: {
                        if (!r_mark_lAr())
                        {
                            break lab9;
                        }
                        break lab7;
                    }
                    base.cursor = base.limit - v_3;
                    lab10: {
                        if (!r_mark_yUm())
                        {
                            break lab10;
                        }
                        break lab7;
                    }
                    base.cursor = base.limit - v_3;
                    lab11: {
                        if (!r_mark_sUn())
                        {
                            break lab11;
                        }
                        break lab7;
                    }
                    base.cursor = base.limit - v_3;
                    lab12: {
                        if (!r_mark_yUz())
                        {
                            break lab12;
                        }
                        break lab7;
                    }
                    base.cursor = base.limit - v_3;
                }
                if (!r_mark_ymUs_())
                {
                    break lab6;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab13: {
                if (!r_mark_lAr())
                {
                    break lab13;
                }
                base.bra = base.cursor;
                if (!base.slice_del())
                {
                    return false;
                }
                /** @const */ var /** number */ v_4 = base.limit - base.cursor;
                lab14: {
                    base.ket = base.cursor;
                    lab15: {
                        /** @const */ var /** number */ v_5 = base.limit - base.cursor;
                        lab16: {
                            if (!r_mark_DUr())
                            {
                                break lab16;
                            }
                            break lab15;
                        }
                        base.cursor = base.limit - v_5;
                        lab17: {
                            if (!r_mark_yDU())
                            {
                                break lab17;
                            }
                            break lab15;
                        }
                        base.cursor = base.limit - v_5;
                        lab18: {
                            if (!r_mark_ysA())
                            {
                                break lab18;
                            }
                            break lab15;
                        }
                        base.cursor = base.limit - v_5;
                        if (!r_mark_ymUs_())
                        {
                            base.cursor = base.limit - v_4;
                            break lab14;
                        }
                    }
                }
                B_continue_stemming_noun_suffixes = false;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab19: {
                if (!r_mark_nUz())
                {
                    break lab19;
                }
                lab20: {
                    /** @const */ var /** number */ v_6 = base.limit - base.cursor;
                    lab21: {
                        if (!r_mark_yDU())
                        {
                            break lab21;
                        }
                        break lab20;
                    }
                    base.cursor = base.limit - v_6;
                    if (!r_mark_ysA())
                    {
                        break lab19;
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab22: {
                lab23: {
                    /** @const */ var /** number */ v_7 = base.limit - base.cursor;
                    lab24: {
                        if (!r_mark_sUnUz())
                        {
                            break lab24;
                        }
                        break lab23;
                    }
                    base.cursor = base.limit - v_7;
                    lab25: {
                        if (!r_mark_yUz())
                        {
                            break lab25;
                        }
                        break lab23;
                    }
                    base.cursor = base.limit - v_7;
                    lab26: {
                        if (!r_mark_sUn())
                        {
                            break lab26;
                        }
                        break lab23;
                    }
                    base.cursor = base.limit - v_7;
                    if (!r_mark_yUm())
                    {
                        break lab22;
                    }
                }
                base.bra = base.cursor;
                if (!base.slice_del())
                {
                    return false;
                }
                /** @const */ var /** number */ v_8 = base.limit - base.cursor;
                lab27: {
                    base.ket = base.cursor;
                    if (!r_mark_ymUs_())
                    {
                        base.cursor = base.limit - v_8;
                        break lab27;
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            if (!r_mark_DUr())
            {
                return false;
            }
            base.bra = base.cursor;
            if (!base.slice_del())
            {
                return false;
            }
            /** @const */ var /** number */ v_9 = base.limit - base.cursor;
            lab28: {
                base.ket = base.cursor;
                lab29: {
                    /** @const */ var /** number */ v_10 = base.limit - base.cursor;
                    lab30: {
                        if (!r_mark_sUnUz())
                        {
                            break lab30;
                        }
                        break lab29;
                    }
                    base.cursor = base.limit - v_10;
                    lab31: {
                        if (!r_mark_lAr())
                        {
                            break lab31;
                        }
                        break lab29;
                    }
                    base.cursor = base.limit - v_10;
                    lab32: {
                        if (!r_mark_yUm())
                        {
                            break lab32;
                        }
                        break lab29;
                    }
                    base.cursor = base.limit - v_10;
                    lab33: {
                        if (!r_mark_sUn())
                        {
                            break lab33;
                        }
                        break lab29;
                    }
                    base.cursor = base.limit - v_10;
                    lab34: {
                        if (!r_mark_yUz())
                        {
                            break lab34;
                        }
                        break lab29;
                    }
                    base.cursor = base.limit - v_10;
                }
                if (!r_mark_ymUs_())
                {
                    base.cursor = base.limit - v_9;
                    break lab28;
                }
            }
        }
        base.bra = base.cursor;
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_stem_suffix_chain_before_ki() {
        base.ket = base.cursor;
        if (!r_mark_ki())
        {
            return false;
        }
        lab0: {
            /** @const */ var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                if (!r_mark_DA())
                {
                    break lab1;
                }
                base.bra = base.cursor;
                if (!base.slice_del())
                {
                    return false;
                }
                /** @const */ var /** number */ v_2 = base.limit - base.cursor;
                lab2: {
                    base.ket = base.cursor;
                    lab3: {
                        /** @const */ var /** number */ v_3 = base.limit - base.cursor;
                        lab4: {
                            if (!r_mark_lAr())
                            {
                                break lab4;
                            }
                            base.bra = base.cursor;
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            /** @const */ var /** number */ v_4 = base.limit - base.cursor;
                            lab5: {
                                if (!r_stem_suffix_chain_before_ki())
                                {
                                    base.cursor = base.limit - v_4;
                                    break lab5;
                                }
                            }
                            break lab3;
                        }
                        base.cursor = base.limit - v_3;
                        if (!r_mark_possessives())
                        {
                            base.cursor = base.limit - v_2;
                            break lab2;
                        }
                        base.bra = base.cursor;
                        if (!base.slice_del())
                        {
                            return false;
                        }
                        /** @const */ var /** number */ v_5 = base.limit - base.cursor;
                        lab6: {
                            base.ket = base.cursor;
                            if (!r_mark_lAr())
                            {
                                base.cursor = base.limit - v_5;
                                break lab6;
                            }
                            base.bra = base.cursor;
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            if (!r_stem_suffix_chain_before_ki())
                            {
                                base.cursor = base.limit - v_5;
                                break lab6;
                            }
                        }
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab7: {
                if (!r_mark_nUn())
                {
                    break lab7;
                }
                base.bra = base.cursor;
                if (!base.slice_del())
                {
                    return false;
                }
                /** @const */ var /** number */ v_6 = base.limit - base.cursor;
                lab8: {
                    base.ket = base.cursor;
                    lab9: {
                        /** @const */ var /** number */ v_7 = base.limit - base.cursor;
                        lab10: {
                            if (!r_mark_lArI())
                            {
                                break lab10;
                            }
                            base.bra = base.cursor;
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break lab9;
                        }
                        base.cursor = base.limit - v_7;
                        lab11: {
                            base.ket = base.cursor;
                            lab12: {
                                /** @const */ var /** number */ v_8 = base.limit - base.cursor;
                                lab13: {
                                    if (!r_mark_possessives())
                                    {
                                        break lab13;
                                    }
                                    break lab12;
                                }
                                base.cursor = base.limit - v_8;
                                if (!r_mark_sU())
                                {
                                    break lab11;
                                }
                            }
                            base.bra = base.cursor;
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            /** @const */ var /** number */ v_9 = base.limit - base.cursor;
                            lab14: {
                                base.ket = base.cursor;
                                if (!r_mark_lAr())
                                {
                                    base.cursor = base.limit - v_9;
                                    break lab14;
                                }
                                base.bra = base.cursor;
                                if (!base.slice_del())
                                {
                                    return false;
                                }
                                if (!r_stem_suffix_chain_before_ki())
                                {
                                    base.cursor = base.limit - v_9;
                                    break lab14;
                                }
                            }
                            break lab9;
                        }
                        base.cursor = base.limit - v_7;
                        if (!r_stem_suffix_chain_before_ki())
                        {
                            base.cursor = base.limit - v_6;
                            break lab8;
                        }
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            if (!r_mark_ndA())
            {
                return false;
            }
            lab15: {
                /** @const */ var /** number */ v_10 = base.limit - base.cursor;
                lab16: {
                    if (!r_mark_lArI())
                    {
                        break lab16;
                    }
                    base.bra = base.cursor;
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    break lab15;
                }
                base.cursor = base.limit - v_10;
                lab17: {
                    if (!r_mark_sU())
                    {
                        break lab17;
                    }
                    base.bra = base.cursor;
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    /** @const */ var /** number */ v_11 = base.limit - base.cursor;
                    lab18: {
                        base.ket = base.cursor;
                        if (!r_mark_lAr())
                        {
                            base.cursor = base.limit - v_11;
                            break lab18;
                        }
                        base.bra = base.cursor;
                        if (!base.slice_del())
                        {
                            return false;
                        }
                        if (!r_stem_suffix_chain_before_ki())
                        {
                            base.cursor = base.limit - v_11;
                            break lab18;
                        }
                    }
                    break lab15;
                }
                base.cursor = base.limit - v_10;
                if (!r_stem_suffix_chain_before_ki())
                {
                    return false;
                }
            }
        }
        return true;
    };

    /** @return {boolean} */
    function r_stem_noun_suffixes() {
        lab0: {
            /** @const */ var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                base.ket = base.cursor;
                if (!r_mark_lAr())
                {
                    break lab1;
                }
                base.bra = base.cursor;
                if (!base.slice_del())
                {
                    return false;
                }
                /** @const */ var /** number */ v_2 = base.limit - base.cursor;
                lab2: {
                    if (!r_stem_suffix_chain_before_ki())
                    {
                        base.cursor = base.limit - v_2;
                        break lab2;
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab3: {
                base.ket = base.cursor;
                if (!r_mark_ncA())
                {
                    break lab3;
                }
                base.bra = base.cursor;
                if (!base.slice_del())
                {
                    return false;
                }
                /** @const */ var /** number */ v_3 = base.limit - base.cursor;
                lab4: {
                    lab5: {
                        /** @const */ var /** number */ v_4 = base.limit - base.cursor;
                        lab6: {
                            base.ket = base.cursor;
                            if (!r_mark_lArI())
                            {
                                break lab6;
                            }
                            base.bra = base.cursor;
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break lab5;
                        }
                        base.cursor = base.limit - v_4;
                        lab7: {
                            base.ket = base.cursor;
                            lab8: {
                                /** @const */ var /** number */ v_5 = base.limit - base.cursor;
                                lab9: {
                                    if (!r_mark_possessives())
                                    {
                                        break lab9;
                                    }
                                    break lab8;
                                }
                                base.cursor = base.limit - v_5;
                                if (!r_mark_sU())
                                {
                                    break lab7;
                                }
                            }
                            base.bra = base.cursor;
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            /** @const */ var /** number */ v_6 = base.limit - base.cursor;
                            lab10: {
                                base.ket = base.cursor;
                                if (!r_mark_lAr())
                                {
                                    base.cursor = base.limit - v_6;
                                    break lab10;
                                }
                                base.bra = base.cursor;
                                if (!base.slice_del())
                                {
                                    return false;
                                }
                                if (!r_stem_suffix_chain_before_ki())
                                {
                                    base.cursor = base.limit - v_6;
                                    break lab10;
                                }
                            }
                            break lab5;
                        }
                        base.cursor = base.limit - v_4;
                        base.ket = base.cursor;
                        if (!r_mark_lAr())
                        {
                            base.cursor = base.limit - v_3;
                            break lab4;
                        }
                        base.bra = base.cursor;
                        if (!base.slice_del())
                        {
                            return false;
                        }
                        if (!r_stem_suffix_chain_before_ki())
                        {
                            base.cursor = base.limit - v_3;
                            break lab4;
                        }
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab11: {
                base.ket = base.cursor;
                lab12: {
                    /** @const */ var /** number */ v_7 = base.limit - base.cursor;
                    lab13: {
                        if (!r_mark_ndA())
                        {
                            break lab13;
                        }
                        break lab12;
                    }
                    base.cursor = base.limit - v_7;
                    if (!r_mark_nA())
                    {
                        break lab11;
                    }
                }
                lab14: {
                    /** @const */ var /** number */ v_8 = base.limit - base.cursor;
                    lab15: {
                        if (!r_mark_lArI())
                        {
                            break lab15;
                        }
                        base.bra = base.cursor;
                        if (!base.slice_del())
                        {
                            return false;
                        }
                        break lab14;
                    }
                    base.cursor = base.limit - v_8;
                    lab16: {
                        if (!r_mark_sU())
                        {
                            break lab16;
                        }
                        base.bra = base.cursor;
                        if (!base.slice_del())
                        {
                            return false;
                        }
                        /** @const */ var /** number */ v_9 = base.limit - base.cursor;
                        lab17: {
                            base.ket = base.cursor;
                            if (!r_mark_lAr())
                            {
                                base.cursor = base.limit - v_9;
                                break lab17;
                            }
                            base.bra = base.cursor;
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            if (!r_stem_suffix_chain_before_ki())
                            {
                                base.cursor = base.limit - v_9;
                                break lab17;
                            }
                        }
                        break lab14;
                    }
                    base.cursor = base.limit - v_8;
                    if (!r_stem_suffix_chain_before_ki())
                    {
                        break lab11;
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab18: {
                base.ket = base.cursor;
                lab19: {
                    /** @const */ var /** number */ v_10 = base.limit - base.cursor;
                    lab20: {
                        if (!r_mark_ndAn())
                        {
                            break lab20;
                        }
                        break lab19;
                    }
                    base.cursor = base.limit - v_10;
                    if (!r_mark_nU())
                    {
                        break lab18;
                    }
                }
                lab21: {
                    /** @const */ var /** number */ v_11 = base.limit - base.cursor;
                    lab22: {
                        if (!r_mark_sU())
                        {
                            break lab22;
                        }
                        base.bra = base.cursor;
                        if (!base.slice_del())
                        {
                            return false;
                        }
                        /** @const */ var /** number */ v_12 = base.limit - base.cursor;
                        lab23: {
                            base.ket = base.cursor;
                            if (!r_mark_lAr())
                            {
                                base.cursor = base.limit - v_12;
                                break lab23;
                            }
                            base.bra = base.cursor;
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            if (!r_stem_suffix_chain_before_ki())
                            {
                                base.cursor = base.limit - v_12;
                                break lab23;
                            }
                        }
                        break lab21;
                    }
                    base.cursor = base.limit - v_11;
                    if (!r_mark_lArI())
                    {
                        break lab18;
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab24: {
                base.ket = base.cursor;
                if (!r_mark_DAn())
                {
                    break lab24;
                }
                base.bra = base.cursor;
                if (!base.slice_del())
                {
                    return false;
                }
                /** @const */ var /** number */ v_13 = base.limit - base.cursor;
                lab25: {
                    base.ket = base.cursor;
                    lab26: {
                        /** @const */ var /** number */ v_14 = base.limit - base.cursor;
                        lab27: {
                            if (!r_mark_possessives())
                            {
                                break lab27;
                            }
                            base.bra = base.cursor;
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            /** @const */ var /** number */ v_15 = base.limit - base.cursor;
                            lab28: {
                                base.ket = base.cursor;
                                if (!r_mark_lAr())
                                {
                                    base.cursor = base.limit - v_15;
                                    break lab28;
                                }
                                base.bra = base.cursor;
                                if (!base.slice_del())
                                {
                                    return false;
                                }
                                if (!r_stem_suffix_chain_before_ki())
                                {
                                    base.cursor = base.limit - v_15;
                                    break lab28;
                                }
                            }
                            break lab26;
                        }
                        base.cursor = base.limit - v_14;
                        lab29: {
                            if (!r_mark_lAr())
                            {
                                break lab29;
                            }
                            base.bra = base.cursor;
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            /** @const */ var /** number */ v_16 = base.limit - base.cursor;
                            lab30: {
                                if (!r_stem_suffix_chain_before_ki())
                                {
                                    base.cursor = base.limit - v_16;
                                    break lab30;
                                }
                            }
                            break lab26;
                        }
                        base.cursor = base.limit - v_14;
                        if (!r_stem_suffix_chain_before_ki())
                        {
                            base.cursor = base.limit - v_13;
                            break lab25;
                        }
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab31: {
                base.ket = base.cursor;
                lab32: {
                    /** @const */ var /** number */ v_17 = base.limit - base.cursor;
                    lab33: {
                        if (!r_mark_nUn())
                        {
                            break lab33;
                        }
                        break lab32;
                    }
                    base.cursor = base.limit - v_17;
                    if (!r_mark_ylA())
                    {
                        break lab31;
                    }
                }
                base.bra = base.cursor;
                if (!base.slice_del())
                {
                    return false;
                }
                /** @const */ var /** number */ v_18 = base.limit - base.cursor;
                lab34: {
                    lab35: {
                        /** @const */ var /** number */ v_19 = base.limit - base.cursor;
                        lab36: {
                            base.ket = base.cursor;
                            if (!r_mark_lAr())
                            {
                                break lab36;
                            }
                            base.bra = base.cursor;
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            if (!r_stem_suffix_chain_before_ki())
                            {
                                break lab36;
                            }
                            break lab35;
                        }
                        base.cursor = base.limit - v_19;
                        lab37: {
                            base.ket = base.cursor;
                            lab38: {
                                /** @const */ var /** number */ v_20 = base.limit - base.cursor;
                                lab39: {
                                    if (!r_mark_possessives())
                                    {
                                        break lab39;
                                    }
                                    break lab38;
                                }
                                base.cursor = base.limit - v_20;
                                if (!r_mark_sU())
                                {
                                    break lab37;
                                }
                            }
                            base.bra = base.cursor;
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            /** @const */ var /** number */ v_21 = base.limit - base.cursor;
                            lab40: {
                                base.ket = base.cursor;
                                if (!r_mark_lAr())
                                {
                                    base.cursor = base.limit - v_21;
                                    break lab40;
                                }
                                base.bra = base.cursor;
                                if (!base.slice_del())
                                {
                                    return false;
                                }
                                if (!r_stem_suffix_chain_before_ki())
                                {
                                    base.cursor = base.limit - v_21;
                                    break lab40;
                                }
                            }
                            break lab35;
                        }
                        base.cursor = base.limit - v_19;
                        if (!r_stem_suffix_chain_before_ki())
                        {
                            base.cursor = base.limit - v_18;
                            break lab34;
                        }
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab41: {
                base.ket = base.cursor;
                if (!r_mark_lArI())
                {
                    break lab41;
                }
                base.bra = base.cursor;
                if (!base.slice_del())
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab42: {
                if (!r_stem_suffix_chain_before_ki())
                {
                    break lab42;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab43: {
                base.ket = base.cursor;
                lab44: {
                    /** @const */ var /** number */ v_22 = base.limit - base.cursor;
                    lab45: {
                        if (!r_mark_DA())
                        {
                            break lab45;
                        }
                        break lab44;
                    }
                    base.cursor = base.limit - v_22;
                    lab46: {
                        if (!r_mark_yU())
                        {
                            break lab46;
                        }
                        break lab44;
                    }
                    base.cursor = base.limit - v_22;
                    if (!r_mark_yA())
                    {
                        break lab43;
                    }
                }
                base.bra = base.cursor;
                if (!base.slice_del())
                {
                    return false;
                }
                /** @const */ var /** number */ v_23 = base.limit - base.cursor;
                lab47: {
                    base.ket = base.cursor;
                    lab48: {
                        /** @const */ var /** number */ v_24 = base.limit - base.cursor;
                        lab49: {
                            if (!r_mark_possessives())
                            {
                                break lab49;
                            }
                            base.bra = base.cursor;
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            /** @const */ var /** number */ v_25 = base.limit - base.cursor;
                            lab50: {
                                base.ket = base.cursor;
                                if (!r_mark_lAr())
                                {
                                    base.cursor = base.limit - v_25;
                                    break lab50;
                                }
                            }
                            break lab48;
                        }
                        base.cursor = base.limit - v_24;
                        if (!r_mark_lAr())
                        {
                            base.cursor = base.limit - v_23;
                            break lab47;
                        }
                    }
                    base.bra = base.cursor;
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    base.ket = base.cursor;
                    if (!r_stem_suffix_chain_before_ki())
                    {
                        base.cursor = base.limit - v_23;
                        break lab47;
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            base.ket = base.cursor;
            lab51: {
                /** @const */ var /** number */ v_26 = base.limit - base.cursor;
                lab52: {
                    if (!r_mark_possessives())
                    {
                        break lab52;
                    }
                    break lab51;
                }
                base.cursor = base.limit - v_26;
                if (!r_mark_sU())
                {
                    return false;
                }
            }
            base.bra = base.cursor;
            if (!base.slice_del())
            {
                return false;
            }
            /** @const */ var /** number */ v_27 = base.limit - base.cursor;
            lab53: {
                base.ket = base.cursor;
                if (!r_mark_lAr())
                {
                    base.cursor = base.limit - v_27;
                    break lab53;
                }
                base.bra = base.cursor;
                if (!base.slice_del())
                {
                    return false;
                }
                if (!r_stem_suffix_chain_before_ki())
                {
                    base.cursor = base.limit - v_27;
                    break lab53;
                }
            }
        }
        return true;
    };

    /** @return {boolean} */
    function r_post_process_last_consonants() {
        var /** number */ among_var;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_23);
        if (among_var == 0)
        {
            return false;
        }
        base.bra = base.cursor;
        switch (among_var) {
            case 1:
                if (!base.slice_from("p"))
                {
                    return false;
                }
                break;
            case 2:
                if (!base.slice_from("\u00E7"))
                {
                    return false;
                }
                break;
            case 3:
                if (!base.slice_from("t"))
                {
                    return false;
                }
                break;
            case 4:
                if (!base.slice_from("k"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_append_U_to_stems_ending_with_d_or_g() {
        base.ket = base.cursor;
        base.bra = base.cursor;
        lab0: {
            /** @const */ var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                if (!(base.eq_s_b("d")))
                {
                    break lab1;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            if (!(base.eq_s_b("g")))
            {
                return false;
            }
        }
        if (!base.go_out_grouping_b(g_vowel, 97, 305))
        {
            return false;
        }
        lab2: {
            /** @const */ var /** number */ v_2 = base.limit - base.cursor;
            lab3: {
                lab4: {
                    /** @const */ var /** number */ v_3 = base.limit - base.cursor;
                    lab5: {
                        if (!(base.eq_s_b("a")))
                        {
                            break lab5;
                        }
                        break lab4;
                    }
                    base.cursor = base.limit - v_3;
                    if (!(base.eq_s_b("\u0131")))
                    {
                        break lab3;
                    }
                }
                if (!base.slice_from("\u0131"))
                {
                    return false;
                }
                break lab2;
            }
            base.cursor = base.limit - v_2;
            lab6: {
                lab7: {
                    /** @const */ var /** number */ v_4 = base.limit - base.cursor;
                    lab8: {
                        if (!(base.eq_s_b("e")))
                        {
                            break lab8;
                        }
                        break lab7;
                    }
                    base.cursor = base.limit - v_4;
                    if (!(base.eq_s_b("i")))
                    {
                        break lab6;
                    }
                }
                if (!base.slice_from("i"))
                {
                    return false;
                }
                break lab2;
            }
            base.cursor = base.limit - v_2;
            lab9: {
                lab10: {
                    /** @const */ var /** number */ v_5 = base.limit - base.cursor;
                    lab11: {
                        if (!(base.eq_s_b("o")))
                        {
                            break lab11;
                        }
                        break lab10;
                    }
                    base.cursor = base.limit - v_5;
                    if (!(base.eq_s_b("u")))
                    {
                        break lab9;
                    }
                }
                if (!base.slice_from("u"))
                {
                    return false;
                }
                break lab2;
            }
            base.cursor = base.limit - v_2;
            lab12: {
                /** @const */ var /** number */ v_6 = base.limit - base.cursor;
                lab13: {
                    if (!(base.eq_s_b("\u00F6")))
                    {
                        break lab13;
                    }
                    break lab12;
                }
                base.cursor = base.limit - v_6;
                if (!(base.eq_s_b("\u00FC")))
                {
                    return false;
                }
            }
            if (!base.slice_from("\u00FC"))
            {
                return false;
            }
        }
        return true;
    };

    /** @return {boolean} */
    function r_is_reserved_word() {
        if (!(base.eq_s_b("ad")))
        {
            return false;
        }
        /** @const */ var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            if (!(base.eq_s_b("soy")))
            {
                base.cursor = base.limit - v_1;
                break lab0;
            }
        }
        if (base.cursor > base.limit_backward)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_remove_proper_noun_suffix() {
        /** @const */ var /** number */ v_1 = base.cursor;
        lab0: {
            base.bra = base.cursor;
            golab1: while(true)
            {
                /** @const */ var /** number */ v_2 = base.cursor;
                lab2: {
                    {
                        /** @const */ var /** number */ v_3 = base.cursor;
                        lab3: {
                            if (!(base.eq_s("'")))
                            {
                                break lab3;
                            }
                            break lab2;
                        }
                        base.cursor = v_3;
                    }
                    base.cursor = v_2;
                    break golab1;
                }
                base.cursor = v_2;
                if (base.cursor >= base.limit)
                {
                    break lab0;
                }
                base.cursor++;
            }
            base.ket = base.cursor;
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = v_1;
        /** @const */ var /** number */ v_4 = base.cursor;
        lab4: {
            {
                /** @const */ var /** number */ c1 = base.cursor + 2;
                if (c1 > base.limit)
                {
                    break lab4;
                }
                base.cursor = c1;
            }
            golab5: while(true)
            {
                /** @const */ var /** number */ v_5 = base.cursor;
                lab6: {
                    if (!(base.eq_s("'")))
                    {
                        break lab6;
                    }
                    base.cursor = v_5;
                    break golab5;
                }
                base.cursor = v_5;
                if (base.cursor >= base.limit)
                {
                    break lab4;
                }
                base.cursor++;
            }
            base.bra = base.cursor;
            base.cursor = base.limit;
            base.ket = base.cursor;
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = v_4;
        return true;
    };

    /** @return {boolean} */
    function r_more_than_one_syllable_word() {
        /** @const */ var /** number */ v_1 = base.cursor;
        for (var /** number */ v_2 = 2; v_2 > 0; v_2--)
        {
            if (!base.go_out_grouping(g_vowel, 97, 305))
            {
                return false;
            }
            base.cursor++;
        }
        base.cursor = v_1;
        return true;
    };

    /** @return {boolean} */
    function r_postlude() {
        base.limit_backward = base.cursor; base.cursor = base.limit;
        {
            /** @const */ var /** number */ v_1 = base.limit - base.cursor;
            lab0: {
                if (!r_is_reserved_word())
                {
                    break lab0;
                }
                return false;
            }
            base.cursor = base.limit - v_1;
        }
        /** @const */ var /** number */ v_2 = base.limit - base.cursor;
        r_append_U_to_stems_ending_with_d_or_g();
        base.cursor = base.limit - v_2;
        /** @const */ var /** number */ v_3 = base.limit - base.cursor;
        r_post_process_last_consonants();
        base.cursor = base.limit - v_3;
        base.cursor = base.limit_backward;
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        r_remove_proper_noun_suffix();
        if (!r_more_than_one_syllable_word())
        {
            return false;
        }
        base.limit_backward = base.cursor; base.cursor = base.limit;
        /** @const */ var /** number */ v_1 = base.limit - base.cursor;
        r_stem_nominal_verb_suffixes();
        base.cursor = base.limit - v_1;
        if (!B_continue_stemming_noun_suffixes)
        {
            return false;
        }
        /** @const */ var /** number */ v_2 = base.limit - base.cursor;
        r_stem_noun_suffixes();
        base.cursor = base.limit - v_2;
        base.cursor = base.limit_backward;
        if (!r_postlude())
        {
            return false;
        }
        return true;
    };

    /**@return{string}*/
    this['stemWord'] = function(/**string*/word) {
        base.setCurrent(word);
        this.stem();
        return base.getCurrent();
    };
};
