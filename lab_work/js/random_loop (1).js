        const shuffleArray = array => [...array].sort(() => Math.random() - 0.5);

        const numbers = [html_1, html_2, html_3, html_4, html_5];
        const new_order = shuffleArray(numbers);

        function loopFunction(item) {
            document.write(item);
        }

        new_order.forEach(loopFunction);
        
