function Validator(options) {
    // Get element parent
    function getParent(element, selector) {
        while(element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    // get element Form
    const formElement = document.querySelector(options.form);

    function validate(inputELement, rule) {
        let errorMessage
        const errorElement = getParent(inputELement, options.formGroupSelector).querySelector(options.formMessage); 
        
        const rules = selectorRules[rule.selector];

        for(var i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputELement.value)
            if (errorMessage) break;
        }

            if (errorMessage) {
                errorElement.innerText = errorMessage;
                getParent(inputELement, options.formGroupSelector).classList.add('invalid');
            } else {
                errorElement.innerText = '';
                getParent(inputELement, options.formGroupSelector).classList.remove('invalid');
            };
        return !errorMessage
    };

    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            options.rules.forEach(rule => {
                //get input Element
                const inputELement = formElement.querySelector(rule.selector);
                var isValid = validate(inputELement, rule);
                
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce((values, input) => {
                        values[input.name] = input.value;
                        return values;
                    }, {});
                    options.onSubmit(formValues);
                }
                else {
                    formElement.submit();
                }
            } 
        }

        options.rules.forEach(rule => {
            // Xử lý các rule cho mỗi input
            // Lưu lại các rule cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            //get input Element
            const inputELement = formElement.querySelector(rule.selector);
            
            if (inputELement) {

                // onblur là khi nhấn vào ô input và nhấn chuột ra ngoài gọi là onblur
                // nếu chưa nhập giá trị thì sẽ thêm class invalid thông báo lỗi
                inputELement.onblur = function () {
                    validate(inputELement, rule)
                }

                // oninput là khi giá trị trong input thay đổi thì 
                // remove class invalid
                inputELement.oninput = function () {
                    const errorElement = getParent(inputELement, options.formGroupSelector).querySelector(options.formMessage); 

                    errorElement.innerText = '';
                    getParent(inputELement, options.formGroupSelector).classList.remove('invalid');
                };
            };
        });
    };
};

Validator.isRequired = function (selector, message) {
    return {
        selector,
        test(value) {
            return value ? undefined : message || 'Please enter this field'
        }
    }
}

Validator.isEmail = function (selector, message) {
    return {
        selector,
        test(value) {
            var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regexEmail.test(value) ? undefined : message || 'Please enter correctly information'
        }
    }
}

Validator.isPhone = function (selector, message) {
    return {
        selector,
        test(value) {
            var regexPhoneNumber = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/;
            return regexPhoneNumber.test(value) ? undefined : message || 'Please enter feedback'
        }
    }
}