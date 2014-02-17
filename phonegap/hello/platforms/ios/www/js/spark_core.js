var SPARK_ID = "53ff6c065067544831120787";
var SPARK_TOKEN = "8625bb578da1b5bd235d782cf851c504fa4ca678";

function getSparkVariable(sparkID, sparkToken, sparkVariable) {

	$.get("https://api.spark.io/v1/devices/" + sparkID + "/" + sparkVariable, {
		access_token: sparkToken
	})
		.done(function(data) {
			console
			console.log("Spark variable: "+data.result);

			cp.color("#aa3322");
		});
}

getSparkVariable(SPARK_ID, SPARK_TOKEN, "presence");