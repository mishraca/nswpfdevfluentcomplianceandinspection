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

    decisionContext: function () {
        try {
            return JSON.stringify(new CporReviewRuntime().decisionContext(this.getParameter('sysparm_case')));
        } catch (error) {
            return JSON.stringify({ error: String(error) });
        }
    },

    decide: function () {
        try {
            var result = new CporReviewRuntime().decide(
                this.getParameter('sysparm_case'),
                this.getParameter('sysparm_activity'),
                this.getParameter('sysparm_outcome'),
                this.getParameter('sysparm_comments'));
            return JSON.stringify({ ok: true, caseId: result.caseId });
        } catch (error) {
            return JSON.stringify({ error: String(error) });
        }
    },

    amendmentRequestContext: function () {
        try {
            return JSON.stringify(new CporReviewRuntime().amendmentRequestContext(this.getParameter('sysparm_case')));
        } catch (error) {
            return JSON.stringify({ error: String(error) });
        }
    },

    requestAmendment: function () {
        try {
            var result = new CporReviewRuntime().requestAmendment(
                this.getParameter('sysparm_case'), this.getParameter('sysparm_activity'),
                this.getParameter('sysparm_reason'));
            return JSON.stringify({ ok: true, caseId: result.caseId });
        } catch (error) {
            return JSON.stringify({ error: String(error) });
        }
    },

    amendmentContext: function () {
        try {
            return JSON.stringify(new CporReviewRuntime().amendmentContext(this.getParameter('sysparm_case')));
        } catch (error) {
            return JSON.stringify({ error: String(error) });
        }
    },

    saveAmendment: function () {
        try {
            var raw = String(this.getParameter('sysparm_values') || '');
            if (!raw || raw.length > 24000) throw 'The amendment details are too long.';
            var result = new CporReviewRuntime().saveAmendment(
                this.getParameter('sysparm_case'), JSON.parse(raw));
            return JSON.stringify({ ok: true, caseId: result.caseId });
        } catch (error) {
            return JSON.stringify({ error: String(error) });
        }
    },

    resubmit: function () {
        try {
            var result = new CporReviewRuntime().resubmit(
                this.getParameter('sysparm_case'), this.getParameter('sysparm_activity'),
                this.getParameter('sysparm_response'));
            return JSON.stringify({ ok: true, caseId: result.caseId });
        } catch (error) {
            return JSON.stringify({ error: String(error) });
        }
    },

    finalise: function () {
        try {
            var result = new CporReviewRuntime().finalise(
                this.getParameter('sysparm_case'),
                this.getParameter('sysparm_conducted'),
                this.getParameter('sysparm_date'),
                this.getParameter('sysparm_charge'),
                this.getParameter('sysparm_charge_number'),
                this.getParameter('sysparm_reason'));
            return JSON.stringify({ ok: true, caseId: result.caseId });
        } catch (error) {
            return JSON.stringify({ error: String(error) });
        }
    },

    type: 'CporReviewAjax'
});
