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
        //for now they are all the same option, more shapes to come!
        //per fess
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

        //per pale
        if (this.userResponses[0] === "Per Pale") {
            ctx.beginPath();
            ctx.rect(181, 78, 92, 150)
            ctx.moveTo(181, 230 - 118);
            ctx.bezierCurveTo(181 + (0.5522847498307936 * 92), 230 - 118,  181 + 92, 230 - (0.5522847498307936 * 118), 181 + 92, 230);
            ctx.bezierCurveTo(181 + 92, 230 + (0.5522847498307936 * 118), 181 + (0.5522847498307936 * 92), 230 + 118, 181, 230 + 118);
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

        //tierced in fess
        if (this.userResponses[0] === "Tierced in Fess") {
            ctx.beginPath();
            ctx.rect(89, 158, 184, 90);
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

        if (this.userResponses[0] === "Per Saltire") {
            ctx.beginPath();
            ctx.moveTo(89, 78);
            ctx.lineTo(273, 78);
            ctx.lineTo(183, 210);
            ctx.moveTo(106, 300);
            ctx.lineTo(255, 300);
            ctx.lineTo(183, 210);
            ctx.moveTo(106, 300);
            ctx.bezierCurveTo(183, 412, 265, 295, 255, 300);
            
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

        //per chevron
        if (this.userResponses[0] === "Per Chevron") {
            ctx.beginPath();
            ctx.moveTo(106, 300);
            ctx.lineTo(255, 300);
            ctx.lineTo(183, 210);
            ctx.moveTo(106, 300);
            ctx.bezierCurveTo(183, 412, 265, 295, 255, 300);
            
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

        //chooses image
        const drawnImg = new Image();
        drawnImg.style.width = "50%";
        drawnImg.style.height = "auto";
        if (this.userResponses[3] === "Deer") {
            drawnImg.src = "/src/media/deer.png";
        } else if (this.userResponses[3] === "Eagle") {
            drawnImg.src = "/src/media/eagle.png";
        } else if (this.userResponses[3] === "Badger") {
            drawnImg.src = "/src/media/badger.png";
        } else if (this.userResponses[3] === "Lion") {
            drawnImg.src = "/src/media/lion.png";
        } else if (this.userResponses[3] === "Dragon") {
            drawnImg.src = "/src/media/dragon.png";
        }
        drawnImg.onload = () => {
        ctx.drawImage(drawnImg, 0, 0);
        }
    }
}
</script>
