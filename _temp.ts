// Moduler folder Structure
/*
 step1: interfece-> user.interface.ts
 step2: schema/Model-> user.model.ts
 step3: route
 step4: route Function->controller.ts
 step5: Database Query Function---> services.ts
 */
// working flow of Modules Structure
/*
step1: app.use("/api/v1/use", Router)
step2: app.use() call router
step3: router call controller
step4: controller call service
step5: service call model
step6: model call interface
step7: app.use("/api/v1/use", Router)
*/
