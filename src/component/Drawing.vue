<script>
export default {
    inject: ["provider"], 
    props: {
        userResponses: Array
    },
    // eslint-disable-next-line vue/require-render-return
    render() {
        if(!this.provider.context) return;
        const ctx = this.provider.context;
        const drawnImg = new Image();
        drawnImg.src = "./dragon.png";
        drawnImg.onload = () => {
        ctx.drawImage(drawnImg, 0, 0);
        }

                    //chooses main shield color
        ctx.beginPath();
        if (this.userResponses[1] === "Silver") {
            ctx.fillStyle = "#93a2af";
        } else if (this.userResponses[1] === "Blue") {
            ctx.fillStyle = "#26426b";
        } else if (this.userResponses[1] === "Purple") {
            ctx.fillStyle = "#29244d";
        } else if (this.userResponses[1] === "Gold") {
            ctx.fillStyle = "#7d6d50";
        } else if (this.userResponses[1] === "Black") {
            ctx.fillStyle = "#1b1d27";
        }
        ctx.rect(89, 78, 184, 158);
        ctx.moveTo(181, 230 - 118);
        ctx.bezierCurveTo(181 + (0.5522847498307936 * 92), 230 - 118,  181 + 92, 230 - (0.5522847498307936 * 118), 181 + 92, 230);
        ctx.bezierCurveTo(181 + 92, 230 + (0.5522847498307936 * 118), 181 + (0.5522847498307936 * 92), 230 + 118, 181, 230 + 118);
        ctx.bezierCurveTo(181 - (0.5522847498307936 * 92), 230 + 118, 181 - 92, 230 + (0.5522847498307936 * 118), 181 - 92, 230);
        ctx.bezierCurveTo(181 - 92, 230 - (0.5522847498307936 * 118), 181 - (0.5522847498307936 * 92), 230 - 118, 181, 230 - 118);
        ctx.fill();
        ctx.closePath();

        //chooses shape and secondary color
        //option one
        if (this.userResponses[0] === "Per Fess") {
            ctx.beginPath();
            ctx.rect(89, 78, 184, 130);
            ctx.moveTo(181, 230 - 118);
            if (this.userResponses[2] === "Red") {
                ctx.fillStyle = "#54131c";
            } else if (this.userResponses[2] === "Blue") {
                ctx.fillStyle = "#26426b";
            } else if (this.userResponses[2] === "Gold") {
                ctx.fillStyle = "#7d6d50";
            } else if (this.userResponses[2] === "Green") {
                ctx.fillStyle = "#243c37";
            } else if (this.userResponses[2] === "Black") {
                ctx.fillStyle = "#1b1d27";
            }
            ctx.fill();
            ctx.closePath();
        }

        //option 2
    }
}
</script>
