        document.body.style.overflow = 'hidden';

        const overlay = document.getElementById('overlay');
        const loaderContainer = document.querySelector('.loader-container');

        if (!sessionStorage.getItem('pageLoaded')) {
            setTimeout(() => {
                overlay.style.opacity = '0';
                loaderContainer.style.opacity = '0';

                setTimeout(() => {
                    document.body.style.overflow = 'auto';
                    overlay.style.display = 'none';
                    loaderContainer.style.display = 'none';
                }, 700);
            }, 700);
        } else {
            overlay.style.display = 'none';
            loaderContainer.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        sessionStorage.setItem('pageLoaded', 'true');

        const letters = [
            { symbol: 'Αα', description: 'άλφα / alpha', page: 'alpha' },
            { symbol: 'Ββ', description: 'βήτα / beta', page: 'beta' },
            { symbol: 'Γγ', description: 'γάμμα / gamma', page: 'gamma' },
            { symbol: 'Δδ', description: 'δέλτα / delta', page: 'delta' },
            { symbol: 'Εε', description: 'έψιλον / epsilon', page: 'epsilon' },
            { symbol: 'Ζζ', description: 'ζήτα / zeta', page: 'zeta' },
            { symbol: 'Ηη', description: 'ήτα / eta', page: 'eta' },
            { symbol: 'Θθ', description: 'θήτα / theta', page: 'theta' },
            { symbol: 'Ιι', description: 'γιώτα / iota', page: 'iota' },
            { symbol: 'Κκ', description: 'κάππα / kappa', page: 'kappa' },
            { symbol: 'Λλ', description: 'λάμβδα / lambda', page: 'lambda' },
            { symbol: 'Μμ', description: 'μι / mu', page: 'mu' },
            { symbol: 'Νν', description: 'νι / nu', page: 'nu' },
            { symbol: 'Ξξ', description: 'ξι / xi', page: 'xi' },
            { symbol: 'Οο', description: 'όμικρον / omicron', page: 'omicron' },
            { symbol: 'Ππ', description: 'πι / pi', page: 'pi' },
            { symbol: 'Ρρ', description: 'ρώ / rho', page: 'rho' },
            { symbol: 'Σσς', description: 'σίγμα / sigma', page: 'sigma' },
            { symbol: 'Ττ', description: 'ταυ / tau', page: 'tau' },
            { symbol: 'Υυ', description: 'ύψιλον / upsilon', page: 'upsilon' },
            { symbol: 'Φφ', description: 'φί / phi', page: 'phi' },
            { symbol: 'Χχ', description: 'χι / chi', page: 'chi' },
            { symbol: 'Ψψ', description: 'ψι / psi', page: 'psi' },
            { symbol: 'Ωω', description: 'ωμέγα / omega', page: 'omega' }
        ];

        const alphabetContainer = document.getElementById('alphabet');

        letters.forEach(letter => {
            const letterCell = document.createElement('div');
            letterCell.className = 'letter-cell';

            const letterLink = document.createElement('a');
            letterLink.className = 'letter';
            letterLink.textContent = letter.symbol;
            letterLink.href = `${letter.page}.html`;

            const descriptionDiv = document.createElement('div');
            descriptionDiv.className = 'description';
            descriptionDiv.textContent = letter.description;

            letterCell.appendChild(letterLink);
            letterCell.appendChild(descriptionDiv);
            alphabetContainer.appendChild(letterCell);
        });
