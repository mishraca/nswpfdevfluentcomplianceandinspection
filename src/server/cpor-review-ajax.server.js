var CporReviewAjax = Class.create();
// eslint-disable-next-line no-unsupported-node-builtins
CporReviewAjax.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
    supportContext: function () {
        try {
            return JSON.stringify(new CporReviewRuntime().supportContext(this.getParameter('sysparm_case')));
        } catch (error) {
            return JSON.stringify({ error: String(error) });
        }
    },

    support: function () {
        try {
            var result = new CporReviewRuntime().support(
                this.getParameter('sysparm_case'),
                this.getParameter('sysparm_activity'),
                this.getParameter('sysparm_nominee'),
                this.getParameter('sysparm_comments'));
            return JSON.stringify({ ok: true, caseId: result.caseId });
        } catch (error) {
            return JSON.stringify({ error: String(error) });
        }
    },

    type: 'CporReviewAjax'
});
