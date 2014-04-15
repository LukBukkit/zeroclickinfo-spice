(function(env){    
    env.ddg_spice_word_map = function(api_result) {
        "use strict";

        if ( (!api_result) || ("200" !== api_result.result_code)) {
    	return;
        }

        Spice.add({
            id: 'word_map',
            name: 'Word Map',
            data             	: api_result,
            meta: {
                itemType: "Related to " + api_result.entry + " (Levelpump)",
                sourceUrl: 'http://levelpump.com/graph-dictionary.php?mailLink=' + encodeURIComponent(api_result.encrypt_entry) + '&from=ddg',
                sourceName: 'Levelpump'
            },
            templates: {
                detail: Spice.word_map.detail
            }
        });
    }
}(this));