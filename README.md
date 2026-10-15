# Compliance and Inspection Case Management

Source for the police-owned Fluent application `x_au_nswp_cicsm`. Its
Compliance and inspection case table extends the shared Operational case table
in `x_au_nswp_pcm`. The CPOR 16D leaf table stores the application fields on
that same Task record.

The Employee Center record producer is defined as Active and Published. It has
two-column sections, native Save as Draft, client validation and server
validation. It has no user criteria. Its catalog association is intentionally
left for the police development instance administrator. The producer verifies
active referenced users and department, resolves the selected Manager's HR
Profile, and uses SAP HDA Position when present, otherwise SAP Position. It
records the position at submission; officers do not enter it.

The backend application menu exposes compliance cases, CPOR cases and case
activities to the shared case worker role. The CPOR case list has a "New CPOR
application" action that opens the native producer. Staff should create an
application through that action rather than create an incomplete Task record.
The CPOR form has a case activities related list and a lifecycle Process Flow.
An after-insert rule uses the service's configured first support stage to
create a position-bound review activity. The position resolver checks live HR
Profile values with HDA priority.

The Manager support, Superintendent decision and inspection outcome actions
are defined for the shared workspace. Each action rechecks the current actor,
case lifecycle and configured stage on the server. Manager support also checks
the nominee's effective rank (`u_hda_rank` first, then `title`) against an
application-owned rank record selected for the approval stage, and resolves
their SAP HDA Position before SAP Position. A Superintendent rank record is
supplied; an administrator must bind it to the approval stage and activate the
rule after checking the police rank values.

This branch is **not ready for operational use**. The Core CPOR service and
stages remain inactive; live position handover refresh and native police-instance
verification are still pending. The workspace actions compile locally but have
not been opened in the police instance.
Employee Center page, catalog and ticket configuration will be completed on
the police instance. Cross-scope access and the end-to-end journey require
native review. A local build only validates SDK
source; it does not establish native behavior.

Install Core before this app when the first visual journey is complete. Do not
merge or install this branch solely to inspect its current producer.
